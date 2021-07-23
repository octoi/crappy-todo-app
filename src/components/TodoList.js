import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Todo from './Todo';

export default function TodoList({ todoItems, setTodoItems, todoHelper, filter }) {
    const [todos, setTodos] = useState(todoItems || []);

    useEffect(() => {
        setTodos(todoItems)
    }, [todoItems])

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(todos);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setTodos(items);
        setTodoItems(items);
    }

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="todos">
                {(provided) => (
                    <ul {...provided.droppableProps} ref={provided.innerRef}>
                        {todos !== "" && todos.map((todo, idx) => {
                            if (filter === "done" && !todo.isDone) return null;
                            if (filter === "todo" && todo.isDone) return null;
                            return (
                                <Draggable key={idx} draggableId={`item-${idx}`} index={idx}>
                                    {(provided) => <li
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}
                                    >
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
