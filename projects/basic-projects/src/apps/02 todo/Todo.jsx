import { useReducer } from "react";
import styles from "./Todo.module.css";

class TodoClass {
    constructor(todo) {
        this._id = crypto.randomUUID();
        this.todo = todo;
    }
}

const Todo = () => {
    const todoReducer = (state, action) => {
        if (action.type === 'add') {

            return [...state, new TodoClass(action.payload.todo)]
        } else if (action.type === 'delete') {
            const index = state.findIndex((todo) => todo._id === action.payload.todoID)
            return state.toSpliced(index, 1)
        }

        return state
    }

    const [todos, dispatch] = useReducer(todoReducer, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        dispatch({ type: 'add', payload: { todo: formData.get('todo') } })
        return e.target.reset()
    }

    const deleteTodo = (todoID) => {
        dispatch({ type: 'delete', payload: { todoID } })
    }
    console.log(todos);
    return (
        <main className={styles.container}>
            <form onSubmit={handleSubmit}>
                <input type="text" name="todo" id="" placeholder="New Todo" />
                <button type="submit">Add</button>
            </form>
            <ul className={`${styles["todos-list"]}`}>
                {
                    todos.map(({ todo, _id }) => (
                        <li key={_id} className={styles.todo}>
                            <span>{todo}</span>{" "}
                            <button className={styles.close} type="button" onClick={() => deleteTodo(_id)}>
                                X
                            </button>
                        </li>
                    ))
                }
            </ul>
        </main>
    );
}

export default Todo;