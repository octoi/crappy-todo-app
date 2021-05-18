import { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("")

    useEffect(() => {
        if (!localStorage) return;

        let todosFromStorage = localStorage.getItem("todos");
        if (todosFromStorage) setTodos(todos);

        return () => {
            localStorage.setItem("todos", todos)
        }
    }, [todos]);

    return (
        <div className="App">
            <h1>Todo App</h1>
            <input
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="To do ??"
            />
        </div>
    );
}

export default App;
