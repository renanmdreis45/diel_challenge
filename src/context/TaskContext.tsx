import React, { createContext, useContext, useState } from 'react';
import { TaskType, StateType, TaskAppContextType } from './TaskContextTypes';
import { addTaskService, getTasksService, updateTaskService } from '../api/task';

export const MyAppContext = createContext({} as TaskAppContextType);

export const MyAppProvider = ({ children }: { children: React.ReactNode }) => {
    const initialState: StateType = {
        tasks: [],
        activeFilter: 'today',
        newTaskSelectedDate: new Date(),
    };

    const [state, setState] = useState(initialState);

    const addTask = async (task: TaskType) => {
        await addTaskService(task);

        setState((prevState: StateType) => ({
            ...prevState,
            tasks: [...prevState.tasks, task],
        }));

    };

    const getTasks = async (filter: string, type: string) => {
    	const res = await getTasksService(filter, type);

    	const { tasks } = await res.json();

    	setState((prevState) => ({
    		...prevState,
    		tasks,
    	}));
    };

    const updateTask = async (id: string, updatedTask: TaskType) => {
        setState((prevState: StateType) => ({
            ...prevState,
            tasks: prevState.tasks.map((task: TaskType) =>
                task.id === id ? updatedTask : task
            ),
        }));

        await updateTaskService(id, updatedTask);
    };

    const removeTask = async (id: string) => {
        setState((prevState: StateType) => ({
            ...prevState,
            tasks: prevState.tasks.filter((task: TaskType) => task.id !== id),
        }));


        await removeTask(id);

    }

    const updateActiveFilter = (filterActive: string) => {
        setState({ ...state, activeFilter: filterActive });
    };

    const updateNewTaskSelectedDate = (newDate: Date) => {
        setState({ ...state, newTaskSelectedDate: newDate });
    };

    const appContext = {
        state,
        getTasks,
        addTask,
        updateTask,
        removeTask,
        updateActiveFilter,
        updateNewTaskSelectedDate,
    };

    return (
        <MyAppContext.Provider value={appContext}>{children}</MyAppContext.Provider>
    );
};

export const useMyAppContext = () => useContext(MyAppContext);