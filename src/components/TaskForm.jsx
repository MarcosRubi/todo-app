import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
    const { createTask } = useContext(TaskContext);
    const [newTask, setNewTask] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        newTask.trim().length === 0 ? "" : createTask(newTask.trim());
        setNewTask('');
    };
    return (
        <form
            action="#"
            method="post"
            onSubmit={(e) => {
                handleOnSubmit(e);
            }}
            className="container"
        >
            <div className="input-group">
                <div className="d-flex align-center">
                    <div className="check"></div>
                    <input
                        type="text"
                        name="txtTask"
                        id="txtTask"
                        placeholder="Create a new todo.."
                        onChange={(e) => {
                            setNewTask(e.target.value);
                        }}
                        value={newTask !== null ? newTask : ""}
                    />
                </div>
            </div>
        </form>
    );
}

export default TaskForm;
