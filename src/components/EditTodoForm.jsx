import {useState} from 'react';

const EditTodoForm = ({editTodo, task}) => {
    const [value, SetValue] = useState(task.task);

    const handleSubmit = e => {
        e.preventDefault();

        editTodo(value, task.id);

        SetValue("")

    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type = "text" className='todo-input' value=
        {value} placeholder='Update Tas' onChange=
        {(e) => SetValue(e.target.value)}/> 
        <button type="submit" className="todo-btn">
            Update Task
        </button>
    </form>
  )
}

export default EditTodoForm