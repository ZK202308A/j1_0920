import {useContext} from "react";
import {CountContext} from "./CountIndex.jsx";

function CountDisplay() {

    const {count} = useContext(CountContext);

    return (
        <div className="text-4xl">
            {count}
        </div>
    );
}

export default CountDisplay;