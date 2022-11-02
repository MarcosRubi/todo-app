import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

function TaskList() {
    const { tasks } = useContext(TaskContext);
    const taskLeft = tasks.filter((task) => task.completed === false)

    if(tasks.length === 0){
        return;
    }

    return (
        <section className="task-list container">
            <ul>
                {tasks.map((task) => {
                    return <TaskItem task={task} key={task.id}/>;
                })} 
            </ul>
            <div className="d-flex jc-between align-center options">
                <span>{taskLeft.length} items left</span>
                <span>Clear Completed</span>
            </div>
        </section>
    );
}

export default TaskList;
