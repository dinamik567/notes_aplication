import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        time: '31 июля, 2005 14:30',
        note: "Заметка 1"
    },
    {
        time: '1 июля, 2005 14:30',
        note: "Заметка 2"
    },
    {
        time: '2 июля, 2005 14:30',
        note: "Заметка 3"
    }
]

export const notesSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addNote: (state, action) => [...state, {time: action.payload.time, note: action.payload.note}],
        deleteNote: (state, action) => {
            return [...state].filter(note => note.time !== action.payload)
        }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addNote, deleteNote } = notesSlice.actions
  
  export default notesSlice.reducer