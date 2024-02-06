import { useContext } from "react";
import { StateContext } from "../Context/StateContext";

const UseContext = () => {
    const { person: { name, age } } = useContext(StateContext)

    return (
        <h1>My name is {name}, and {"I'm"} {age} years old.</h1>
    );
}

export default UseContext;