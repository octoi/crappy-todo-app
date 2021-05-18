export default function Todo({ todo, deleteTodo, resolveTodo }) {
    return (
        <div className="todo">
            <div style={{ display: "flex", alignItems: "center" }}>
                <input onChange={() => resolveTodo(todo.id)} className="checkbox" type="checkbox" checked={todo.isDone} />
                <p className={todo.isDone ? "completed-task" : ""}>{todo.title}</p>
            </div>
            <button onClick={() => deleteTodo(todo.id)}><i className="far fa-trash-alt"></i></button>
        </div>
    )
}
