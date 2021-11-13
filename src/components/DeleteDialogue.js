import React from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';

export default function DeleteDialogue({ isOpen, onClose, handleDeleteTodo }) {
  const cancelRef = React.useRef();

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent background='var(--primary-color)'>
          <AlertDialogHeader>Delete Todo</AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You can't undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button
              background='var(--secondary-color)'
              ref={cancelRef}
              onClick={onClose}
              border='none'
              cursor='pointer'
              color='var(--text-color)'
            >
              Cancel
            </Button>
            <Button
              background='var(--danger-accent-color)'
              ref={cancelRef}
              onClick={handleDeleteTodo}
              border='none'
              cursor='pointer'
              color='var(--secondary-color)'
              ml={3}
              _hover={{
                background: 'var(--danger-color)',
                color: 'var(--text-color)',
              }}
            >
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
