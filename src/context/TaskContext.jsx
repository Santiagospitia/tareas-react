import { createContext, useState, useEffect } from 'react'
import { tareas as data } from "../datos/tasks";

export const TaskContext = createContext() // almacena datos

export function TaskContextProvider(props) { // engloba al resto de componentes
  const [tareas, setTareas] = useState([]);
  
  useEffect(() => {
    setTareas(data);
  }, []);

  function crearTarea(task) {
    setTareas([
      ...tareas,
      {
        id: tareas.length,
        titulo: task.title,
        descripcion: task.descripcion,
      },
    ]);
  }

  function eliminarTarea(id) {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  }
  return (
    <TaskContext.Provider value={{
      tareas:tareas,
      crearTarea:crearTarea,
      eliminarTarea: eliminarTarea
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}

export default TaskContext