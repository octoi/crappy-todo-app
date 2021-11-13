import { useRef } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import DeleteDialogue from './DeleteDialogue';

export default function Todo({ todo, deleteTodo, resolveTodo, editTodo }) {
  const todoRef = useRef();
  const {
    onOpen: deleteOnOpen,
    isOpen: deleteIsOpen,
    onClose: deleteOnClose,
  } = useDisclosure();

  const handleDeleteTodo = () => {
    deleteOnClose();
    todoRef.current.classList.add('fall'); // fall animation
    setTimeout(() => {
      // fall animation needs at least 1 sec
      deleteTodo();
    }, 1000);
  };

  const handleEdit = () => {
    if (window.prompt) {
      const edited = prompt('Edit todo', todo.title);
      if (edited) {
        editTodo(edited);
      }
    }
  };

  return (
    <>
      <div className={`todo ${todo.isDone ? 'todo-fill' : ''}`} ref={todoRef}>
        <div className='todo-content'>
          {todo.isDone && (
            <div onClick={resolveTodo} className='checked-btn'>
              <i class='fas fa-check'></i>
            </div>
          )}
          {!todo.isDone && (
            <input
              onChange={() => resolveTodo()}
              className='checkbox'
              type='checkbox'
              checked={todo.isDone}
            />
          )}
          <p className={todo.isDone ? 'completed-task' : ''}>{todo.title}</p>
        </div>
        <div>
          <button className='todo-delete' onClick={deleteOnOpen}>
            <i className='far fa-trash-alt'></i>
          </button>
          <button className='todo-edit' onClick={handleEdit}>
            <i className='far fa-edit'></i>
          </button>
        </div>
      </div>

      {/* feedbacks */}
      <DeleteDialogue
        isOpen={deleteIsOpen}
        onClose={deleteOnClose}
        handleDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
