import React from "react";

function TaskForm() {
    return (
        <form action="#" method="post" onSubmit={() => { return false; }} className="container">
            <div className="input-group">
                <div className="d-flex align-center">
                    <div className="check"></div>
                    <input type="text" name="txtTask" id="txtTask" placeholder="Create a new todo.." />
                </div>
            </div>
        </form>
    );
}

export default TaskForm;
