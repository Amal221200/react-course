/* eslint-disable react/prop-types */
import { createContext } from "react";

export const StateContext = createContext()

const StateContextProvider = ({ children }) => {
    const person = {
        name: 'Amal Murikkoli',
        age: 24
    }
    return (
        <StateContext.Provider value={{ person }}>
            {children}
        </StateContext.Provider>
    );
}

export default StateContextProvider;