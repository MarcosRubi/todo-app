import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
    let [idTask, setIdTask] = useState(1);
    const [theme, setTheme] = useState(document.querySelector("html").dataset.theme);
    const [tasks, setTasks] = useState([]);
    const [tasksToShow, setTasksToShow] = useState('All')
    
    useEffect(() => {
        if (theme === "dark") {
            document.querySelector("html").setAttribute("data-theme", "dark");
            return;
        }
        document.querySelector("html").setAttribute("data-theme", "light");
    }, [theme]);

    function createTask(task) {
        setIdTask(idTask + 1);
        setTasks([...tasks, { task, completed: false, id: idTask }]);
    }
    function deleteTask(taskID) {
        setTasks(tasks.filter((task) => task.id !== taskID));
    }
    function updateTask(taskID) {
        let newData = [];
        tasks.map((task) => {
            task.id === taskID
                ? newData.push({
                    task: task.task,
                    completed: !task.completed,
                    id: task.id,
                })
                : newData.push(task);
        });
        setTasks(newData);
    }

    return (
        <TaskContext.Provider
            value={{
                theme,
                setTheme,
                createTask,
                tasks,
                deleteTask,
                updateTask,
                tasksToShow,
                setTasksToShow,
                tasksToShow
            }}
        >
            {props.children}
        </TaskContext.Provider>
    );
}
