import { useState, useEffect } from 'react';
import './App.css';
import Todo from './Todo';



function App() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState("");
    const [filter, setFilter] = useState("all");
    const [error, setError] = useState(false);

    const addTodo = (e) => {
        e.preventDefault();
        if (todo) {
            const newTodo = {
                title: todo,
                isDone: false,
                id: Date.now()
            };
            
            setTodos(todos => [...todos, newTodo]);
            setTodo("")
        } else {
            setError(true);
        }
    }

    const deleteTodo = (id) => {
        let newTodos = todos;
        newTodos = newTodos.filter(todoItem => todoItem.id !== id);

        // if (newTodos.length === 0) setIsListEmpty(true)
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

        if (todos === "") {
            let savedTodos = localStorage.getItem("todos");
            if (savedTodos && savedTodos.length !== 0) {
                setTodos(JSON.parse(savedTodos))
            }
        } else {
            localStorage.setItem("todos", JSON.stringify(todos))
        }

    }, [todos]);


    return (
        <div className="App">
            <h1>Todo App</h1>
            <form>
            <div className="input">
                <input
                    value={todo}
                    onChange={(e) => {
                        setTodo(e.target.value);
                        if (e.target.value) setError(false);
                    }}
                    placeholder="To do ??"
                    autoFocus
                />
                <button type="submit" onClick={addTodo}><i className="fas fa-plus"></i></button>
            </div>
            { error && <p className="error-message">Oops! Todo cannot be blank</p> }
            </form>
            <div className="options">
                <button className={filter === "all" ? "selected-btn" : ""} onClick={() => setFilter("all")}>All</button>
                <button className={filter === "done" ? "selected-btn" : ""} onClick={() => setFilter("done")}>Completed</button>
                <button className={filter === "todo" ? "selected-btn" : ""} onClick={() => setFilter("todo")}>Todo</button>
            </div>
            <div style={{ marginTop: "30px" }}>
                {todos !== "" && todos.map(todo => {
                    if (filter === "done" && !todo.isDone) return null;
                    if (filter === "todo" && todo.isDone) return null;
                    return <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} resolveTodo={resolveTodo} />
                })}
            </div>
        </div>
    );
}

export default App;
