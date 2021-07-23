class TodoHelper {
    constructor(setTodos) {
        this.setTodos = setTodos;
    }

    addTodo(todo) {
        const newTodo = {
            title: todo,
            isDone: false,
            id: Date.now()
        };

        this.setTodos(todos => [...todos, newTodo]);
    }

    deleteTodo(allTodos, id) {
        let newTodos = allTodos;
        newTodos = newTodos.filter(todoItem => todoItem.id !== id);
        this.setTodos(newTodos);
    }

    resolveTodo(allTodos, id) {
        this.setTodos(allTodos.filter(todoItem => {
            if (todoItem.id === id) {
                todoItem.isDone = !todoItem.isDone;
            }
            return todoItem;
        }))
    }

    editTodo(allTodos, id, title) {
        this.setTodos(allTodos.filter(todoItem => {
            if (todoItem.id === id) {
                todoItem.title = title;
            }
            return todoItem;
        }))
    }
}

export default TodoHelper;