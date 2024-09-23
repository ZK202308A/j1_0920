import {getTodoList} from "../../api/todoAPI.js";
import {useCallback, useEffect, useState} from "react";

function TodoList() {

    const [page, setPage] = useState(1);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        getTodoList(page).then(result => {
            console.log(result);
        })
    }, [page, refresh]);

    const changePage = useCallback( (value) => {
        setPage(value);
        setRefresh(!refresh);
    }, [page, refresh]);


    console.log("Todo List... render..." )

    return (
        <div>
            <div className='text-4xl'>Todo List Component</div>

            <ul className='flex gap-2 flex-auto p-6'>
                <li onClick={() => changePage(1)}>1</li>
                <li onClick={() => changePage(2)}>2</li>
                <li onClick={() => changePage(3)}>3</li>
                <li onClick={() => changePage(4)}>4</li>
            </ul>
        </div>
    );
}

export default TodoList;