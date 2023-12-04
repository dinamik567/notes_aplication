import { Button, Container, Form, Row, Col } from "react-bootstrap"
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

        //Проверка на пустую строку
        if (noteValue.trim() === '') {
            return
        }

        const currentDate = convertTime(new Date());
        dispatch(addNote({id: Date.now(), time: currentDate, note: noteValue}))
        
        //Сброс значения инпута
        setNoteValue('')
    }

    return (
        <Form 
            style={{marginBottom: '32px'}}
            onSubmit={submitFormHandler}
        >
            <Container style={{padding: 0}} fluid>
                <Row>
                    <Col 
                        xl={9} 
                        lg={9} 
                        md
                    >
                        <Form.Control 
                            style={{marginBottom: '15px'}}
                            name="inputValueOfNote" 
                            type="text"
                            value={noteValue}
                            onChange={changeNoteHandler}
                            size="lg"
                            placeholder="Название заметки"
                        />                        
                    </Col>
                    <Col 
                        xl={3} 
                        lg={3} 
                        md={4} 
                        sm  
                    >
                        <Button 
                            style={{display: 'block', marginLeft: 'auto'}}
                            variant="flat" 
                            size="lg"
                            type="submit"
                        >
                            Добавить заметку
                        </Button>  
                    </Col>
                </Row>
            </Container>
        </Form>
    )
}