import React from "react";
import iconDelete from "../assets/icon-cross.svg";

function TaskItem({ task, id }) {
    const handleOnClick = (e, id)=>{
        document.querySelectorAll('li')[id].classList.toggle('checked')
    }
    return (
        <li onClick={(e) => { handleOnClick(e, id) }} key={task.length} >
            <div className="d-flex align-center jc-between">
                <div className="check checked"></div>
                <span>{task}</span>
                <div className="delete">
                    <img src={iconDelete} alt="Delete Task" />
                </div>
            </div>
        </li>
    );
}

export default TaskItem;
