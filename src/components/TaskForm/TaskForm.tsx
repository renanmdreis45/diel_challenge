import React, {useContext, useEffect, useState} from 'react';
import { Modal, Form, Button, CloseButton} from 'react-bootstrap';
import { ITask } from '../../interfaces/task';
import { DatePicker, TimePicker } from 'antd';
import { MyAppContext } from '../../context/TaskContext';

export interface ITaskForm {
    selectedTask?: ITask;
    closeModal: VoidFunction;
    isNew: boolean;
    showModal: boolean;
}

export const TaskForm = (props: ITaskForm) => {
    let {selectedTask, closeModal, isNew, showModal} = props;
    const [date, setDate] = useState("");
    const { addTask, updateTask} = useContext(MyAppContext);


    const [task, setTask] = useState<ITask>({
        id: '',
        title: '',
        description: '',
        date: '',
        duration: '',
    });

    useEffect(() => {
        if(!isNew) {
            setTask({
                id: selectedTask!.id,
                title: selectedTask!.title,
                description: selectedTask!.description,
                duration: selectedTask!.duration,
                date: selectedTask!.date,
            })
        }
    }, [isNew, selectedTask])



    const handleSubmitCard = async (task: ITask) => {
        
        if(!isNew) {
          await updateTask(task.id, task);
        } else {
          await addTask(task);
        }
        
        setTask({
            id: '',
            title: '',
            description: '',
            date: '',
            duration: '',
        })

        closeModal();

    }

    function changeDate(date: any, dateString: any) {
        setDate(dateString);
        setTask({...task, date: `${dateString}`});
    }

    function changeTime(value: any, timeString: any) {
      setTask({...task, date:`${date} ${timeString}`})
    }

    const timeFormat = 'HH:mm';





    return (
      <>
        <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{isNew ? 'Nova Tarefa' : 'Editar Tarefa'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="descricao">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o título da tarefa"
                onChange={(e) =>setTask({...task, title: e.target.value})}
                defaultValue={task.title}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="description"
            >
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setTask({...task, description: e.target.value})}
                placeholder="Insira a descrição da tarefa"
                defaultValue={task.description}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="duration"
            >
              <Form.Label> Duração </Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setTask({...task, duration: e.target.value})}
                placeholder="Insira a duração da tarefa"
                defaultValue={task.duration}
              />
            </Form.Group>
            <Form.Group
              className="mb-2"
              controlId="date"
            >
              <Form.Label> Data </Form.Label>
            </Form.Group>
            <DatePicker onChange={changeDate}/>
            <Form.Group
              className="mt-3 mb-2"
              controlId="date"
            >
              <Form.Label> Horário </Form.Label>
            </Form.Group>
            <TimePicker format={timeFormat} onChange={changeTime}/>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant = "primary" autoFocus onClick={() => handleSubmitCard(task)}>
            Salvar
          </Button>
          <Button variant = "secondary" autoFocus onClick={closeModal}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}