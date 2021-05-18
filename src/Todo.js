import React from 'react'

export default function Todo({ todo }) {
    return (
        <div className="todo">
            <div style={{ display: "flex", alignItems: "center" }}>
                <input className="checkbox" type="checkbox" />
                <p>Watch crossroads video</p>
            </div>
            <button><i class="far fa-trash-alt"></i></button>
        </div>
    )
}
