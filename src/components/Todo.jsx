
import { FaPenToSquare } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";

const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='Todo'>
    <p onClick={() => toggleComplete(task.id)} 
    className={`${task.completed ? 'completed' : 
    ""}`}>{task.task}</p>
    <div className="iconic">
    <i onClick={() => editTodo(task.id)}><FaPenToSquare /></i>
    <i onClick={() => deleteTodo(task.id)}><FaTrashCan  /></i>
    </div>
    </div>
  )
}

export default Todo