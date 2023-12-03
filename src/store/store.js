import { configureStore } from '@reduxjs/toolkit'
import notesSlice  from './notes-slice'

export const store = configureStore({
  reducer: {
    notes: notesSlice
  },
})