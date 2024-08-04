import {useState} from "react";
////este componente probablemente es el formulario taskformulario
//recibe Taskcreator recibe props----> createNewTask
export const TaskForm = ({ createNewTask }) => {
    const [ newTaskName,setNewTaskName] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        createNewTask(newTaskName)

        setNewTaskName('')
    }

    return (
        <form onSubmit={handleSubmit} className='my-2 flex flex-wrap'>
            <div className="w-full md:w-3/4 pr-2 mb-2 md:mb-0">
                <input
                    className="w-full px-3 py-2 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text" placeholder="Escribe una nueva tarea"
                    value={newTaskName}
                    onChange={(e) => setNewTaskName(e.target.value)}

                />
            </div>
            <div className="w-full md:w-1/4">
                <button className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Guardar Tarea
                </button>
            </div>
        </form>
    )
}
