import React from 'react'
import { Button } from 'react-bootstrap'

export default function TaskItem({task}) {
  return (
    <div className="my-3 purple-300">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>Статус: {task.completed ? 'Виконано' : 'Не виконано'}</p>
        <Button variant='primary'>Редагувати</Button>
        <Button variant='danger' className='mx-2'>Видалити</Button>
        <Button variant={task.completed ? 'secondary' : 'success'}>{task.completed ? 'Скасувати виконання' : 'Відзначити виконаним'}</Button>
      
    </div>
  )
}
