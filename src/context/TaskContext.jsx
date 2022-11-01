import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
    const [theme, setTheme] = useState(document.querySelector("html").dataset.theme);
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector("html").setAttribute("data-theme", "dark");
            return;
        }
        document.querySelector("html").setAttribute("data-theme", "light");
    }, [theme]);

    function createTask(task){
        setTasks([...tasks, task])
    }

    return (
        <TaskContext.Provider value={{ theme, setTheme, createTask, tasks }}>
            {props.children}
        </TaskContext.Provider>
    );
}
