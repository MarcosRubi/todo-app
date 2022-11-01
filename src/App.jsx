import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
    return (
        <main>
            <Header/>
            <TaskForm/>
            <TaskList/>
            <Footer/>
        </main>
    );
}

export default App;
