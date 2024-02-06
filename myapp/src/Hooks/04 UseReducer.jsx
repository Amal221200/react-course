import { useReducer } from "react";

// state
// dispatch

// reducer: custom state Logic.
// initialState: initial.
// init?: function that returns an initialState
const UseReducer = () => {

    const reducer = (state, action) => {
        if (action.type === 'add') {
            return { count: state.count + 1 }
        }
        else if (action.type === 'sub') {
            return { count: state.count - 1 }
        }
        else if (action.type === 'mul') {
            return { count: state.count * 1 }
        }
        else if (action.type === 'div') {
            return { count: state.count / 1 }
        }
        return state;
    }

    const initialState = {
        count: 0
    }

    const [state, dispacth] = useReducer(reducer, initialState)

    return (
        <h1 onClick={() => dispacth({ type: 'add' })}>Add {state.count}</h1>
    );
}

export default UseReducer;