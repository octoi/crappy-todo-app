export default function Todo({ todo, deleteTodo, resolveTodo }) {

    const askToDeleteTodo = () => {
        if (window.confirm) {
            const permission = window.confirm("Are you sure ??")
            if (!permission) return;
        }

        deleteTodo(todo.id)
    }

    return (
        <div className="todo">
            <div className="todo-content">
                <input onChange={() => resolveTodo(todo.id)} className="checkbox" type="checkbox" checked={todo.isDone} />
                <p className={todo.isDone ? "completed-task" : ""}>{todo.title}</p>
            </div>
            <button onClick={askToDeleteTodo}><i className="far fa-trash-alt"></i></button>
        </div>
    )
}
