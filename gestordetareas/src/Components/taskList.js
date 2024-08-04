import {TaskItem} from "./taskItem";

//se crea la lista de tareas
export const TaskList = ({tasks, toggleTask,showCompleted=false}) =>{
//lógica para las listas de tareas
    const taskListRows = (dondeValue) => {
//encadenamiento de métodos del arreglo, filtrar antes de mapear y generar la lista
        return (
            tasks.filter(task => task.done === dondeValue).map(task => (
                <TaskItem task={task} key={task.name} toggleTask={toggleTask}/>
            ))
        )
    }
    return (
        <table className="w-full text-left border-collapse bg-gray-800 text-white">
            <thead>
            <tr >
                <th className="p-3 border border-gray-400 bg-gray-600">Tareas</th>
            </tr>
            </thead>
            <tbody>
            {
                taskListRows(showCompleted).map((row, index) => (
                    <tr key={index} className={index % 2 === 0? 'bg-gray-800': 'bg-gray-700'}>
                        {row}
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}
