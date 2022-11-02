import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

function TaskList() {
    const { tasks, tasksToShow, setTasksToShow } = useContext(TaskContext);
    const tasksActive = tasks.filter((task) => task.completed === false)
    const tasksCompleted = tasks.filter((task) => task.completed !== false)
    let tasksFilter = tasks

    if(tasks.length === 0){
        return;
    }
    switch (tasksToShow) {
        case 'Active':
            tasksFilter = tasksActive
            break;
        case 'Completed':
            tasksFilter = tasksCompleted
            break;
        default:
            tasksFilter = tasks
            break;
    }


    return (
        <section className="task-list container">
            <ul>
                {tasksFilter.map((task) => {
                    return <TaskItem task={task} key={task.id}/>;
                })} 
            </ul>
            <div className="d-flex jc-between align-center options">
                <span>{tasksActive.length} items left</span>
                {tasksToShow === 'All' ? <button className="btn btn-secondary" onClick={()=>{setTasksToShow('Active')}} >Clear Completed</button> : ''}
                
            </div>
        </section>
    );
}

export default TaskList;
