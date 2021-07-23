import React from 'react';
import Todo from './Todo';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export default function TodoList({ todos, todoHelper, filter }) {
    return (
        <DragDropContext>
            <Droppable droppableId="todos">
                {(provided) => (
                    <ul style={{ marginTop: "30px" }} {...provided.droppableProps} ref={provided.innerRef}>
                        {todos !== "" && todos.map((todo, idx) => {
                            if (filter === "done" && !todo.isDone) return null;
                            if (filter === "todo" && todo.isDone) return null;
                            return (
                                <Draggable key={idx} draggableId={`item-${idx}`} index={idx}>
                                    {(provided) => <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                        <Todo
                                            todo={todo}
                                            key={todo.id}
                                            deleteTodo={() => todoHelper.deleteTodo(todos, todo.id)}
                                            resolveTodo={() => todoHelper.resolveTodo(todos, todo.id)}
                                        />
                                    </li>}
                                </Draggable>
                            )
                        })}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    )
}
