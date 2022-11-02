import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";


function App() {
    return (
        <>
            <Header />
            <TaskForm />
            <TaskList />
            <TaskFilter/>
            <Footer />
        </>
    );
}

export default App;
