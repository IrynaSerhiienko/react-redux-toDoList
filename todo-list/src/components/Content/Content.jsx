import React from 'react'
import { Button, Container } from 'react-bootstrap'
import s from './Content.module.scss'; 


export default function Content() {
  return (
    <Container className={s.wrapper}>
        <h1>Список завдань</h1>
        <Button>Додати завдання</Button>
    </Container>
  )
}
