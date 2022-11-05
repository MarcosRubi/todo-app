import React, { useContext } from "react";
import iconDelete from "../assets/icon-cross.svg";
import { TaskContext } from "../context/TaskContext";

function TaskItem({task, draggableProvided}) {
    const { deleteTask, updateTask } = useContext(TaskContext);

    function handleOnClick(id){
        updateTask(id)
    }

    return (
        <li className={task.completed ? 'checked' : ''} {...draggableProvided.draggableProps} ref={draggableProvided.innerRef} {...draggableProvided.dragHandleProps}>
            <div className={`d-flex align-center jc-between`}>
                <div className="d-flex align-center flex-grow" onClick={()=>{handleOnClick(task.id)}}>
                    <div className="check"></div>
                    <span className="flex-grow">{task.task}</span>
                </div>
                <div className="delete" onClick={() => { deleteTask(task.id); }} >
                    <img src={iconDelete} alt="Delete Task" />
                </div>
            </div>
        </li>
    );
}

export default TaskItem;
