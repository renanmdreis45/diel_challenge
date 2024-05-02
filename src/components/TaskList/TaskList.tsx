import { useContext, useEffect, useState } from "react";
import { ITask } from "../../interfaces/task";
import { Button } from "antd";
import { format } from 'date-fns';
import './TaskList.css';
import { TaskCard } from "../TaskCard/TaskCard";
import { TaskForm } from "../TaskForm/TaskForm";
import { TaskSearch } from "../TaskSearch/TaskSearch";
import { MyAppContext} from "../../context/TaskContext";
import Filter from "../TaskFilter/TaskFilter";



export function TaskList() {

    const [tasks, setTasks] = useState<ITask[]>();
    const {state, getTasks} = useContext(MyAppContext);

    const [showModal, setShowModal] = useState<boolean>(false);

    const [search, setSearch] = useState<string>("");

    const [filterType, setFilterType] = useState("day");

    const [selectedDate, setSelectedDate] = useState("");


    useEffect(() => {
        const today = format(new Date(), 'MM-dd-yyyy');
        getTasks(today, filterType);
        if (state.tasks) {
            setTasks(state.tasks);
        }
    }, [])

    useEffect(() => {
        getTasks(selectedDate, filterType);
        if(state.tasks) {
            setTasks(state.tasks);
        }

    }, [filterType])
    return (
        <>
            <TaskForm isNew = {true} showModal = {showModal} closeModal={() => setShowModal(false)} />
            <div className="task-list-container">
                <h1 className="task-list-header"> Lista de tarefas </h1>
                <TaskSearch search={search} setSearch={setSearch}/>
                <Filter filterType={filterType} setFilterType={setFilterType} date={selectedDate} setDate={setSelectedDate} />
                <div className="task-list">
                    {tasks?.filter((task) => task.title.toLowerCase().includes(search.toLowerCase())).map((task) => (
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