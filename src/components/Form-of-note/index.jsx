import { Button, FloatingLabel, Form, Stack } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { addNote } from "../../store/notes-slice";
import { convertTime } from "./utils";
import { useState } from "react";

export const FormOfNote = () => {
    const [noteValue, setNoteValue] = useState('');
    const dispatch = useDispatch();

    const changeNoteHandler = (e) => {
        setNoteValue(e.target.value)
    }
    
    const submitFormHandler = (e) => {
        e.preventDefault();

        const currentDate = convertTime(new Date());
        dispatch(addNote({time: currentDate, note: noteValue}))
        
        //Сброс значения инпута
        setNoteValue('')
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
                > 
                    </FloatingLabel>
                <Form.Control 
                    name="inputValueOfNote" 
                    type="text"
                    value={noteValue}
                    onChange={changeNoteHandler}
                />
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