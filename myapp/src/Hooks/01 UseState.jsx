import { useState } from "react";

const UseState = () => {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("Amal Murikkoli");
    const [friends, setFriends] = useState(['Harjeet', 'Harshal', 'Rohan', 'Gaurav']);
    const [person, setPerson] = useState({ name: 'Amal', age: 4 });

    return (
        <div>
            {/* <h1>{counter}</h1>
            <button type="button" className="mx-2" onClick={() => setCounter((state) => --state)}>-</button>
            <button type="button" className="mx-2" onClick={() => setCounter((state) => ++state)}>+</button> */}
            {/* <h1>Friends</h1>
            <ul>
                {
                    friends.map((friend) => (
                        <li key={crypto.randomUUID()}>{friend}</li>
                    ))
                }
            </ul>
            <button onClick={() => setFriends((state) => [...state, 'Aakash'])}>Add Friend</button> */}
            {/* <h1>My Self</h1>
            <div>
                {
                    Object.keys(person).map((key) => (
                        <p key={crypto.randomUUID()}>{key}: {person[key]}</p>
                    ))
                }

                <button onClick={() => setPerson((state) => ({ ...state, email: 'amal@gmail.com' }))}>Add Data</button>
            </div> */}
        </div>
    );
}

export default UseState;