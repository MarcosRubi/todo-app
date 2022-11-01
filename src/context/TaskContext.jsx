import { createContext, useState } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
    const [theme, setTheme] = useState("light");

    return (
            <TaskContext.Provider value={{theme, setTheme}}>
                {props.children}
            </TaskContext.Provider>
    );
}

