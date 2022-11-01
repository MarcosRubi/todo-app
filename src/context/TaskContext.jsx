import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
    const [theme, setTheme] = useState(document.querySelector("html").dataset.theme);

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector("html").setAttribute("data-theme", "dark");
            return;
        }
        document.querySelector("html").setAttribute("data-theme", "light");
    }, [theme]);

    return (
        <TaskContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </TaskContext.Provider>
    );
}
