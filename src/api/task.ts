import { format, add } from 'date-fns';

const URL_API = 'http://localhost:3001';

export async function addTaskService(task: any) {
    const result = await fetch(`${URL_API}/task`, {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return result;
}

export async function updateTaskService(taskId: string, entity: any) {

    const result = await fetch(`${ URL_API }/task/${taskId}`, {
        method: 'PUT',
        body: JSON.stringify(entity),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return result;
}

export async function removeTask(taskId: string) {
    await fetch(`${URL_API}/task/${taskId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export async function getTasksService(filter: string, type: string) {
    const { startDate, endDate } = getIntervalDate(filter, type);
    const url = `${URL_API}/task?startDate=${startDate}&endDate=${endDate}`;

    const response = await fetch(url);

    const { tasks } = await response.json();

    return tasks;
}

function getIntervalDate(filter: string, type: string) {
    let startDate = format(new Date(), 'MM-dd-yyyy');
    let endDate = format(new Date(), 'MM-dd-yyyy'); 

    if (type === 'day') {
        startDate = filter;
        endDate = filter;
    } else if (type === 'week') {
        startDate = filter;
        endDate = format(add(new Date(), { days: 7 }), 'MM-dd-yyyy');
    } else if(type === 'month') {
        startDate = `${filter}-01`;
        endDate = `${filter}-31`;
    }

    console.log(startDate, endDate);

    return {
        startDate,
        endDate,
    };
}