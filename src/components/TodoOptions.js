import React from 'react';

export default function TodoOptions({ setFilter, filter }) {
    return (
        <div className="options">
            <button className={filter === "all" ? "selected-btn" : ""} onClick={() => setFilter("all")}>All</button>
            <button className={filter === "done" ? "selected-btn" : ""} onClick={() => setFilter("done")}>Completed</button>
            <button className={filter === "todo" ? "selected-btn" : ""} onClick={() => setFilter("todo")}>Todo</button>
        </div>
    )
}
