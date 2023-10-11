import React from 'react'
import { Button, Container } from 'react-bootstrap'
import TaskItem from '../TaskItem/TaskItem';

import s from './TaskList.module.scss'; 


export default function TaskList({tasks, onTaskAdd}) {
  return (
    <Container className={s.wrapper}>
        <h2>Список завдань</h2>
        {tasks.map((task) => (
            <TaskItem key={task.id} task={task}/>
        ))}
        <Button onClick={onTaskAdd} className={`${s.btn} `}>Додати завдання</Button>
    </Container>
  )
}
