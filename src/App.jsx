import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import { useEffect, useState } from "react";


function App() {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(()=>{
        window.addEventListener('resize', handleResize)

        return ()=>{window.removeEventListener('resize', handleResize)}
    },[])

    const handleResize = ()=>{
        setWidth(window.innerWidth)
    }

    return (
        <>
            <Header />
            <TaskForm />
            <TaskList width={width} />
            {width > 767 ? '' : <TaskFilter/> }
            <Footer />
        </>
    );
}

export default App;
