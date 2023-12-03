import { configureStore } from '@reduxjs/toolkit'
import notesSlice  from './notes-slice'
import modalSlice from './modal-slice'

export const store = configureStore({
  reducer: {
    notes: notesSlice,
    modal: modalSlice
  },
})