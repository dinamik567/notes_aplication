import { Stack } from "react-bootstrap"
import { Note } from "../Note"
import { useSelector } from "react-redux"

export const ListOfNotes = () => {
    const notes = useSelector(state => state.notes);
    console.log(notes)
    return (
        <Stack gap={3}> 
            <Note/>
            <Note/>
            <Note/>
        </Stack>
    )
}