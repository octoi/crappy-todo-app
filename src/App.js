import { useState, useEffect } from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoInput from './components/TodoInput';
import TodoHelper from './utils/todoHelper';

function App() {
    const [todos, setTodos] = useState("");
    const [filter, setFilter] = useState("all");

    const todoHelper = new TodoHelper(setTodos);

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
            <TodoInput addTodo={(todo) => todoHelper.addTodo(todo)} />
            <div className="options">
                <button className={filter === "all" ? "selected-btn" : ""} onClick={() => setFilter("all")}>All</button>
                <button className={filter === "done" ? "selected-btn" : ""} onClick={() => setFilter("done")}>Completed</button>
                <button className={filter === "todo" ? "selected-btn" : ""} onClick={() => setFilter("todo")}>Todo</button>
            </div>
            <div style={{ marginTop: "30px" }}>
                {todos !== "" && todos.map(todo => {
                    if (filter === "done" && !todo.isDone) return null;
                    if (filter === "todo" && todo.isDone) return null;
                    return <Todo
                        todo={todo}
                        key={todo.id}
                        deleteTodo={() => todoHelper.deleteTodo(todos, todo.id)}
                        resolveTodo={() => todoHelper.resolveTodo(todos, todo.id)}
                    />
                })}
            </div>
        </div>
    );
}

export default App;
