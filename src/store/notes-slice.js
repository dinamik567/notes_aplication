import { createSlice } from '@reduxjs/toolkit'
import { notes as initialState } from '../defaultSetting';

export const notesSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addNote: (state, action) => [...state, {
            id: action.payload.id,
            time: action.payload.time, 
            note: action.payload.note
        }],
        deleteNote: (state, action) => {
            
            return [...state]?.filter(note => note.id !== action.payload)
        },
        editNote: (state, action) => {
            return [...state]?.map(note => {
                if (note.id === action.payload.id) {
                    return action.payload
                }
                return note
            })
        }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addNote, deleteNote, editNote } = notesSlice.actions
  
  export default notesSlice.reducer