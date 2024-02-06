import { useEffect, useState } from "react";

const UseEffect = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log('Hello');
    }, [counter]);

    return (<h1 onClick={()=> setCounter((state)=> ++state)}>{counter}</h1>);
}

export default UseEffect;