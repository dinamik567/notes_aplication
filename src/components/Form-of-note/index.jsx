import { Button, FloatingLabel, Form, Stack } from "react-bootstrap"

export const FormOfNote = () => {

    const submitFormHandler = (e) => {
        e.preventDefault();
        alert('событие отработало')
    }

    return (
        <Stack 
            style={{marginBottom: '32px'}}
            as='form' 
            direction="horizontal" 
            gap={2}
            onSubmit={submitFormHandler}
        >
            <Form.Group >
                <FloatingLabel
                    controlId="inputNote"
                    label="Название заметки"
                > 
                </FloatingLabel>
                <Form.Control type="text"/>
            </Form.Group>
            <Button 
                variant="primary" 
                type="submit"
            >
                Добавить заметку
            </Button>
        </Stack>
    )
}