import React from 'react';
import Todo from './Todo';

export default function TodoList({ todos, todoHelper, filter }) {
    return (
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
    )
}
