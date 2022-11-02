import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskFilter() {
    
    const {tasksToShow, setTasksToShow, tasks} = useContext(TaskContext)

    function handleOnclick(e, filter){
        setTasksToShow(filter)
        document.querySelector('.btn.active').classList.remove('active') 
        e.target.classList.add('active')
    }

    if(tasks.length === 0){return }


    return <section className="filters container">
        <div className="d-flex align-center jc-center">
            <button className={`btn btn-primary  ${tasksToShow==='All' ? 'active' : ''}`} onClick={(e)=>{handleOnclick(e, 'All')}}>All</button>
            <button className={`btn btn-primary  ${tasksToShow==='Active' ? 'active' : ''}`} onClick={(e)=>{handleOnclick(e, 'Active')}}>Active</button>
            <button className={`btn btn-primary  ${tasksToShow==='Completed' ? 'active' : ''}`}  onClick={(e)=>{handleOnclick(e, 'Completed')}}>Completed</button>

        </div>
    </section>
}

export default TaskFilter;
