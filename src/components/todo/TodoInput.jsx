import {useRef} from "react";

function TodoInput() {

    const selectRef = useRef();

    const handleClick = () => {

        const dom = selectRef.current

        console.log(dom.options[dom.selectedIndex])

    }


    return (
        <div>
            <select ref={selectRef}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

            <button onClick={handleClick}>GET</button>

        </div>
    );
}

export default TodoInput;