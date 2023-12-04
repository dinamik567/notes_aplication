import { Button, Stack } from "react-bootstrap"
import './style.css'
import { useDispatch } from "react-redux"
import { deleteNote } from "../../store/notes-slice"
import { setEditableNote, togleShowModal } from "../../store/modal-slice"
import { EditIcon } from "../Icons/Edit-icon"
import { DeleteIcon } from "../Icons/Delete-icon"

export const Note = ({time, note, id}) => {
    const dispatch = useDispatch();

    const buttonDeleteClickHandler = () => {
        dispatch(deleteNote(id))
    }

    const buttonEditClickHandler = () => {
        dispatch(setEditableNote({time, note, id}))
        dispatch(togleShowModal())
    }

    return (
        <div className="note-container">
            <div style={{margin: '23px'}}>
                <div>{time}</div>
                <div className="note-text">{note}</div>
            </div>
            <Stack className="buttons" direction="horizontal" gap={1}>
                <Button 
                    variant="outline-warning" 
                    onClick={buttonEditClickHandler}
                >
                    <EditIcon/>
                </Button>
                <Button 
                    variant="outline-danger" 
                    onClick={buttonDeleteClickHandler}
                >
                    <DeleteIcon/>
                </Button>
            </Stack>
        </div>
    )
}