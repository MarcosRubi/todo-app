import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import TaskFilter from "./TaskFilter";

function TaskList({ width }) {
    const { tasks, setTasks, tasksToShow, setTasksToShow } = useContext(TaskContext);
    const tasksActive = tasks.filter((task) => task.completed === false);
    const tasksCompleted = tasks.filter((task) => task.completed !== false);
    let tasksFilter = tasks;

    if (tasks.length === 0) {
        return;
    }
    switch (tasksToShow) {
        case "Active":
            tasksFilter = tasksActive;
            break;
        case "Completed":
            tasksFilter = tasksCompleted;
            break;
        default:
            tasksFilter = tasks;
            break;
    }

    const reorder = (list, startIndex, endIndex) => {
        const result = [...list];
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    return (
        <section className="task-list container">
            <DragDropContext
                onDragEnd={(result) => {
                    const { source, destination } = result;
                    if (!destination || source.index === destination.index) {
                        return;
                    }
                    setTasks((prevTasks) =>
                        reorder(prevTasks, source.index, destination.index)
                    );
                }}
            >
                <Droppable droppableId="tasks">
                    {(droppableProvided) => (
                        <ul {...droppableProvided.droppableProps} ref={droppableProvided.innerRef} >
                            {tasksFilter.map((task, index) => (
                                <Draggable key={task.id} draggableId={task.id.toString()} index={index} >
                                    {(draggableProvided) => (
                                        <TaskItem task={task} draggableProvided={ draggableProvided } />
                                    )}
                                </Draggable>
                            ))}
                            {droppableProvided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
            <div className="d-flex jc-between align-center options">
                <span>{tasksActive.length} items left</span>
                {width > 767 ? <TaskFilter /> : ""}
                <button className="btn btn-secondary" onClick={() => { setTasksToShow("Active"); }} > Clear Completed </button>
            </div>
        </section>
    );
}

export default TaskList;
