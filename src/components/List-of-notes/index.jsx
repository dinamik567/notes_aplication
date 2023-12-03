import { Stack } from "react-bootstrap"
import { Note } from "../Note"
import { useSelector } from "react-redux"

export const ListOfNotes = () => {
    const notes = useSelector(state => state.notes);

    return (
        <Stack gap={3}> 
            {notes?.map(note => <Note 
                key={note.time} 
                note={note.note} 
                time={note.time} 
            />)}
        </Stack>
    )
}