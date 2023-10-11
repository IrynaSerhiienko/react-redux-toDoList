import React from 'react'
import { Button } from 'react-bootstrap'

export default function FilterBar() {
  return (
    <div className='my-3'>
        <Button variant='primary' className='mx-2'>Показати всі</Button>
        <Button variant='success' className='mx-2'>Показати виконані</Button>
        <Button variant='danger' className='mx-2'>Показати не виконані</Button>
    </div>
  )
}
