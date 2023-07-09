import TaskCard from "./TaskCard";
import { TaskContext } from '../context/TaskContext' 
import { useContext } from 'react'
function TaskList() {
  
  const { tareas  } = useContext(TaskContext)
  
  if (tareas.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center"> No hay tareas aún </h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tareas.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
