import {useState} from 'react';

const TodoForm = ({addTodo}) => {
    const [value, SetValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value);

        SetValue('');

    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type = "text" className='todo-input' value=
        {value} placeholder='What is the task today?' onChange=
        {(e) => SetValue(e.target.value)}/> 
        <button type="submit" className="todo-btn">
            Add Task
        </button>
    </form>
  )
}

export default TodoForm