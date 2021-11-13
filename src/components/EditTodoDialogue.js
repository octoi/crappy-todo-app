import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';

export default function EditTodoDialogue({
  isOpen,
  onClose,
  todoValue,
  editTodo,
}) {
  const [todo, setTodo] = useState(todoValue);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent background='var(--primary-color)'>
          <ModalHeader>Edit Todo</ModalHeader>
          <ModalCloseButton
            background='var(--secondary-color)'
            border='none'
            cursor='pointer'
            color='var(--text-color)'
          />
          <ModalBody>
            <input
              value={todo}
              onChange={(e) => {
                setTodo(e.target.value);
              }}
              placeholder='To do ??'
              autoFocus
              className='dialogue-input'
            />
          </ModalBody>

          <ModalFooter>
            <Button
              background='var(--secondary-color)'
              onClick={onClose}
              border='none'
              cursor='pointer'
              color='var(--text-color)'
            >
              Cancel
            </Button>
            <Button
              background='var(--accent-color)'
              onClick={() => {
                editTodo(todo);
                onClose();
              }}
              disabled={todo.trim().length === 0}
              border='none'
              cursor='pointer'
              color='var(--secondary-color)'
              ml={3}
              _hover={{
                background: 'var(--accent-accent-color)',
                color: 'var(--secondary-color)',
              }}
            >
              Edit Todo
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
