import {useContext} from "react";
import {CountContext} from "./CountIndex.jsx";
import {LoginContext} from "../../App.jsx";

function CountButtons() {

    const {changeCount} = useContext(CountContext);

    const login = useContext(LoginContext);

    return (
        <div>
            <div className='text-7xl'>{login}</div>
            <button onClick={changeCount} >PLUS</button>
        </div>
    );
}

export default CountButtons;