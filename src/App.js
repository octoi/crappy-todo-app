import { useState, useEffect } from 'react';
import './App.css';
import Todo from './Todo';

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
            <div className="input">
                <input
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    placeholder="To do ??"
                />
                <button><i class="fas fa-plus"></i></button>
            </div>
            <div className="options">
                <button>All</button>
                <button>Completed</button>
                <button>Todo</button>
            </div>
            <div style={{ marginTop: "30px" }}>
                <Todo />
                <Todo />
                <Todo />
            </div>
        </div>
    );
}

export default App;
