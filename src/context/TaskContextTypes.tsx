export type TaskType = {
    id: string;
    title: string;
    description: string;
    duration: string;
    date: string;
    createdAt?: Date;
    updatedAt?: Date;
};

export type MyAppProviderType = {
    state: StateType;
    addTask: (task: TaskType) => void;
    updateTask: (id: string, updatedTask: TaskType) => void;
    updateActiveFilter: (filter: string) => void;
    // getTasks: () => void;
};

export type StateType = {
    tasks: TaskType[];
    activeFilter: string;
    newTaskSelectedDate: Date;
};

export type TaskAppContextType = {
    state: StateType;
    addTask: (task: TaskType) => void;
    updateTask: (id: string, updatedTask: TaskType) => void;
    getTasks: (filter: string, type: string) => void;
    removeTask: (id: string) => void;
    updateActiveFilter: (filter: string) => void;
    updateNewTaskSelectedDate: (date: Date) => void;
};