import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    show: false,
    editableNote: {}
}

export const modalSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        togleShowModal: state => ({...state, show: !state.show}),
        setEditableNote: (state, action) => ({...state, editableNote: {...action.payload}}),
        changeEditableNote: (state, action) => ({
            ...state, 
            editableNote: {...state.editableNote, note: action.payload
        }})
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { togleShowModal, setEditableNote, changeEditableNote } = modalSlice.actions
  
  export default modalSlice.reducer