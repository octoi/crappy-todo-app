import { useState, useEffect } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoHelper from './utils/todoHelper';
import TodoOptions from './components/TodoOptions';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState('');
  const [filter, setFilter] = useState('all');

  const todoHelper = new TodoHelper(setTodos);

  useEffect(() => {
    if (!localStorage) return;

    if (todos === '') {
      let savedTodos = localStorage.getItem('todos');
      if (savedTodos && savedTodos.length !== 0) {
        setTodos(JSON.parse(savedTodos));
      }
    } else {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <div className='App'>
      <h1>Todo App</h1>
      <TodoInput addTodo={(todo) => todoHelper.addTodo(todo)} />
      <TodoOptions filter={filter} setFilter={setFilter} />
      <TodoList
        todoItems={todos}
        setTodoItems={setTodos}
        filter={filter}
        todoHelper={todoHelper}
      />
    </div>
  );
}

export default App;
