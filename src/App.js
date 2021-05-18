import { useState, useEffect } from 'react';
import './App.css';
import Todo from './Todo';



function App() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all");
    const [isListEmpty, setIsListEmpty] = useState(false);

    const addTodo = () => {
        const newTodo = {
            title: todo,
            isDone: false,
            id: Date.now()
        };

        setTodos([...todos, newTodo]);
        setTodo("")
    }

    const deleteTodo = (id) => {
        let newTodos = [];
        todos.forEach(todoItem => {
            if (todoItem.id !== id) {
                newTodos.push(todoItem)
            }
        });

        if (newTodos.length === 0) setIsListEmpty(true)
        setTodos(newTodos)
    }

    const resolveTodo = (id) => {
        setTodos(todos.filter(todoItem => {
            if (todoItem.id === id) {
                todoItem.isDone = !todoItem.isDone;
            }
            return todoItem;
        }))
    }

    useEffect(() => {
        if (!localStorage) return;

        if (isListEmpty) {
            localStorage.setItem("todos", JSON.stringify(todos))
            setIsListEmpty(true)
        } else {
            let savedTodos = localStorage.getItem("todos");
            if (savedTodos && savedTodos.length !== 0) {
                setTodos(JSON.parse(savedTodos))
            }
        }
    }, [todos])


    return (
        <div className="App">
            <h1>Todo App</h1>
            <div className="input">
                <input
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    placeholder="To do ??"
                />
                <button onClick={addTodo}><i className="fas fa-plus"></i></button>
            </div>
            <div className="options">
                <button className={filter === "all" ? "selected-btn" : ""} onClick={() => setFilter("all")}>All</button>
                <button className={filter === "done" ? "selected-btn" : ""} onClick={() => setFilter("done")}>Completed</button>
                <button className={filter === "todo" ? "selected-btn" : ""} onClick={() => setFilter("todo")}>Todo</button>
            </div>
            <div style={{ marginTop: "30px" }}>
                {todos && todos.map(todo => {
                    if (filter === "done" && !todo.isDone) return null;
                    if (filter === "todo" && todo.isDone) return null;
                    return <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} resolveTodo={resolveTodo} />
                })}
            </div>
        </div>
    );
}

export default App;
