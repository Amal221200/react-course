import { useRef } from "react";

const UseRef = () => {
    const ref = useRef();
    console.log(ref.current?.textContent);
    return (<h1 ref={ref}>Hello World!</h1>);
}

export default UseRef;