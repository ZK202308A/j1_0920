import TodoList from "./TodoList.jsx";
import TodoInput from "./TodoInput.jsx";

function TodoIndex() {
    return (
        <div>
            <div className='text-4xl'>Todo Index Component</div>

            <TodoInput></TodoInput>

            <TodoList></TodoList>

            <TodoInput></TodoInput>

        </div>
    );
}

export default TodoIndex;