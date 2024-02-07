import { useReducer } from "react";
import styles from "./Counter.module.css";

const Counter = () => {
    // const [count, setCount] = useState(0);
    const countReducer = (state, action) => {
        if (action.type === 'increment') {
            return state + 1
        }
        return state - 1
    }
    const [count, dispatch] = useReducer(countReducer, 0);
    return (
        <main className={styles.container}>
            <h1 className={styles.number}>{count}</h1>
            <section className={styles["btns-container"]}>
                <button onClick={() => dispatch({ type: 'increment' })} type="button" className={`${styles.btn} ${styles.increment}`}>+</button>
                <button onClick={() => dispatch({ type: 'decrement' })} type="button" className={`${styles.btn} ${styles.decrement}`}>-</button>
            </section>
        </main>
    );
}

export default Counter;