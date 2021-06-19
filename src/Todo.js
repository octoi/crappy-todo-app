import { useRef } from 'react';

export default function Todo({ todo, deleteTodo, resolveTodo }) {
    const todoRef = useRef();

    const askToDeleteTodo = () => {
        if (window.confirm) {
            const permission = window.confirm("Are you sure ??")
            if (!permission) return;
        }

        todoRef.current.classList.add('fall'); // fall animation
        setTimeout(() => { // fall animation needs at least 1 sec 
            deleteTodo(todo.id);
        }, 1000)
    }

    return (
        <div className="todo" ref={todoRef}>
            <div className="todo-content">
                <input onChange={() => resolveTodo(todo.id)} className="checkbox" type="checkbox" checked={todo.isDone} />
                <p className={todo.isDone ? "completed-task" : ""}>{todo.title}</p>
            </div>
            <button onClick={askToDeleteTodo}><i className="far fa-trash-alt"></i></button>
        </div>
    )
}
