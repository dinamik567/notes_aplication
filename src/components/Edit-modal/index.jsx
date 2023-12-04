import { Form, Button, Modal, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { togleShowModal, changeEditableNote } from '../../store/modal-slice';
import { editNote } from '../../store/notes-slice';

export function EditModal() {
  const dispatch = useDispatch()
  const showModal = useSelector(state => state.modal.show);
  const editableNote = useSelector(state => state.modal.editableNote)

  const buttonCancelClickHandler = () => {
      dispatch(togleShowModal())
  }

  const submitFormHandler = (e) => {
    e.preventDefault();

    dispatch(editNote(editableNote));
    dispatch(togleShowModal());
  }

  const changeInputHandler = (e) => {
    dispatch(changeEditableNote(e.target.value))
  }

  return (
    <Modal show={showModal}>
      <Modal.Header>
        <Modal.Title>Изменить заметку</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={submitFormHandler}>
          <Stack direction="horizontal" gap={2}>
            <Form.Control 
              id="floatingEditField" 
              type="text"
              value={editableNote.note} 
              onChange={changeInputHandler}
            />
            <Button variant="success" type='submit'>
              ОК
            </Button>
          </Stack>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={buttonCancelClickHandler}>
          Отмена
        </Button>
      </Modal.Footer>
    </Modal>
  );
}