import React, { useContext } from "react";
import iconDelete from "../assets/icon-cross.svg";
import { TaskContext } from "../context/TaskContext";

function TaskItem({task}) {
    const { deleteTask } = useContext(TaskContext);

    function handleOnClick(e){
        const li = e.target.parentNode.parentNode
        li.classList.toggle('checked')
    }

    return (
        <li key={task.id}>
            <div className={`d-flex align-center jc-between`}>
                <div className="d-flex align-center flex-grow" onClick={(e)=>{handleOnClick(e)}}>
                    <div className="check"></div>
                    <span>{task.task}</span>
                </div>
                <div
                    className="delete"
                    onClick={() => {
                        deleteTask(task.id);
                    }}
                >
                    <img src={iconDelete} alt="Delete Task" />
                </div>
            </div>
        </li>
    );
}

export default TaskItem;
