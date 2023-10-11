import React from 'react'
import { Container } from 'react-bootstrap'
import FilterBar from '../FilterBar/FilterBar'
import TaskList from '../TaskList/TaskList'


export default function MainComponent() {
  return (
    <Container>
        <h1>Мій список завдань</h1>
        <FilterBar/>
        <TaskList/>
    </Container>
  )
}
