import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

function TaskList() {
    const { tasks } = useContext(TaskContext);

    if(tasks.length === 0){
        return;
    }

    return (
        <section className="task-list container">
            <ul>
                {tasks.map((task, id) => {
                    return <TaskItem task={task} id={id} key={id}/>;
                })}
            </ul>
        </section>
    );
}

export default TaskList;
