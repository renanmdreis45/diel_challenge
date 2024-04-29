import { useState } from "react";
import { ITask } from "../../interfaces/task";
import { Button } from "antd";

import './TaskList.css';
import { TaskCard } from "../TaskCard/TaskCard";
import { TaskForm } from "../TaskForm/TaskForm";
import { TaskSearch } from "../TaskSearch/TaskSearch";



export function TaskList() {

    const [tasks, setTasks] = useState<ITask[]>([
        {
            id: '1',
            title: 'Tarefa 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend condimentum nibh sed malesuada. Cras a mauris tincidunt, viverra erat quis, porta arcu. Maecenas id risus at velit pellentesque tincidunt. Sed interdum, leo non luctus suscipit, libero arcu consectetur enim, in convallis lorem enim at libero.',
            date: '04/29/2024',
            duration: '5h'
        },
        {
            id: '2',
            title: 'Tarefa 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend condimentum nibh sed malesuada. Cras a mauris tincidunt, viverra erat quis, porta arcu. Maecenas id risus at velit pellentesque tincidunt. Sed interdum, leo non luctus suscipit, libero arcu consectetur enim, in convallis lorem enim at libero.',
            date: '05/03/2024',
            duration: '10h'
        },
        {
            id: '3',
            title: 'Tarefa 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend condimentum nibh sed malesuada. Cras a mauris tincidunt, viverra erat quis, porta arcu. Maecenas id risus at velit pellentesque tincidunt. Sed interdum, leo non luctus suscipit, libero arcu consectetur enim, in convallis lorem enim at libero.',
            date: '05/02/2024',
            duration: '15h'
        },
        {
            id: '4',
            title: 'Tarefa 4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend condimentum nibh sed malesuada. Cras a mauris tincidunt, viverra erat quis, porta arcu. Maecenas id risus at velit pellentesque tincidunt. Sed interdum, leo non luctus suscipit, libero arcu consectetur enim, in convallis lorem enim at libero.',
            date: '05/01/2024',
            duration: '20h'
        },
        {
            id: '5',
            title: 'Tarefa 5',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend condimentum nibh sed malesuada. Cras a mauris tincidunt, viverra erat quis, porta arcu. Maecenas id risus at velit pellentesque tincidunt. Sed interdum, leo non luctus suscipit, libero arcu consectetur enim, in convallis lorem enim at libero.',
            date: '04/30/2024',
            duration: '25h'
        },
    ]);

    const [showModal, setShowModal] = useState<boolean>(false);

    const [search, setSearch] = useState<string>("");

    const saveNewTask = () => {
        console.log("Salvou");
    }

    return (
        <>
            <TaskForm isNew = {true} showModal = {showModal} closeModal={() => setShowModal(false)} saveTask={() => saveNewTask}/>
            <div className="task-list-container">
                <h1 className="task-list-header"> Lista de tarefas </h1>
                <TaskSearch search={search} setSearch={setSearch}/>
                <div className="task-list">
                    {tasks.filter((task) => task.title.toLowerCase().includes(search.toLowerCase())).map((task) => (
                        <TaskCard key={task.id} task={task} setShowModal = {setShowModal} showModal = {showModal}/>
                    ))}
                </div>
                <div className="task-list-footer">
                    <Button type="default" size="large" onClick={() => setShowModal(true)}> Criar uma nova tarefa </Button>
                </div>
            </div>
        </>

    );
}