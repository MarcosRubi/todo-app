import React from "react";
import iconDelete from '../assets/icon-cross.svg'

function TaskItem({task}) {
    return <li>
        <div className="d-flex align-center jc-between">
            <div className="check"></div>
            <span>{task}</span>
            <div className="delete"><img src={iconDelete} alt="Delete Task" /></div>
        </div>
    </li>;
}

export default TaskItem;
