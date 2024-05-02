import { Button} from "antd";

import './TaskCard.css';
import { ITask } from "../../interfaces/task";
import { TaskForm } from "../TaskForm/TaskForm";
import { useContext, useState } from "react";
import { MyAppContext } from "../../context/TaskContext";

interface ITaskCard {
    task: ITask;
    showModal: boolean;
    setShowModal: (showModal: boolean) => void;
}

export function TaskCard({task}: ITaskCard) {

    const [showModal, setShowModal] = useState<boolean>(false);
    const {removeTask} = useContext(MyAppContext);


    return (
        <>
            <TaskForm isNew = {false} showModal = {showModal} closeModal={() => setShowModal(false)} selectedTask={task} />
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
                    <Button type="primary" onClick={() => removeTask(task.id)} danger> Remover </Button>
                </div>
            </div>
        </>

    )
}