import React, {useState} from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

export default function TaskForm({show, onHide}) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        ///redux add
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Створення завдання</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Назва</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Введіть назву завдання'
                            value={title}
                            onChange={(event) => {setTitle(event.target.value)}}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Опис</Form.Label>
                        <Form.Control
                            as='textarea'
                            rows={3}
                            value={description}
                            onChange={(event) => {setDescription(event.target.value)}}
                        />
                    </Form.Group>
                    <Button variant='primary' type='submit'>Додати завдання</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}
