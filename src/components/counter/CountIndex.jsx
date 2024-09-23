import CountButtons from "./CountButtons.jsx";
import {createContext, useState} from "react";
import CountDisplay from "./CountDisplay.jsx";

export const CountContext = createContext()

function CountIndex() {

    const [count, setCount] = useState(0);

    const changeCount = () => setCount(count + 1)


    return (
        <CountContext.Provider value={{count, changeCount}}>
            <CountDisplay></CountDisplay>
            <CountButtons></CountButtons>
        </CountContext.Provider>
    );
}

export default CountIndex;