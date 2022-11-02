import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
    let [idTask, setIdTask] = useState(1);
    const [theme, setTheme] = useState(
        document.querySelector("html").dataset.theme
    );
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector("html").setAttribute("data-theme", "dark");
            return;
        }
        document.querySelector("html").setAttribute("data-theme", "light");
    }, [theme]);

    function createTask(task) {
        setIdTask((idTask + 1));
        setTasks([...tasks, { task, completed: false, id: idTask }]);
    }
    function deleteTask(taskID) {
        setTasks(tasks.filter((task) => task.id !== taskID));
    }

    return (
        <TaskContext.Provider
            value={{ theme, setTheme, createTask, tasks, deleteTask }}
        >
            {props.children}
        </TaskContext.Provider>
    );
}
