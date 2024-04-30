import { Button} from "antd";

import './TaskCard.css';
import { ITask } from "../../interfaces/task";
import { TaskForm } from "../TaskForm/TaskForm";
import { useState } from "react";

interface ITaskCard {
    task: ITask;
    showModal: boolean;
    setShowModal: (showModal: boolean) => void;
}

export function TaskCard({task}: ITaskCard) {

    const [showModal, setShowModal] = useState<boolean>(false);

    const saveTask = (task: ITask) => {
        console.log(task);
    }

    return (
        <>
            <TaskForm isNew = {false} showModal = {showModal} closeModal={() => setShowModal(false)} selectedTask={task} saveTask={() => saveTask(task)}/>
            <div className="task-card">
                <div className="task-title">
                    <h2>{task.title}</h2>
                </div>
                <div className="task-description">
                    <p> <span className="span-details">Descrição: </span>{task.description}</p>
                </div>
                <div className="task-details">
                    <div>
                        <p> <span className="span-details">Duração: </span>{task.duration}</p>
                    </div>
                    <div>
                        <p> <span className="span-details">Data de Início: </span>{task.date}</p>
                    </div>
                </div>
                <div className="task-footer">
                    <Button type="primary" onClick={() => setShowModal(true)}> Editar </Button>
                    <Button type="primary" danger> Remover </Button>
                </div>
            </div>
        </>

    )
}