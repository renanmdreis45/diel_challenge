export interface ITask {
    id: string;
    title: string;
    description: string;
    duration: string;
    date: string;
    createdAt?: Date;
    updatedAt?: Date;
}