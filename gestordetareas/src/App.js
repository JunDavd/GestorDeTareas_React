import {useState,useEffect} from "react";
import './App.css';
import {TaskForm} from './Components/taskForm';
import {TaskList} from './Components/taskList';
import {TasksVisibilityControl} from './Components/tasksVisibilityControl';




function App() {
    const [tasksItems, setTasksItems] = useState([]);


//Use estate para controlar el estado de la tabla de tareas completas, por defecto en no mostrar
    const [showCompleted, setShowCompleted] = useState(false)

//Función para crear nueva tarea
    function createNewTask(taskName){
        ///se evalua si una tarea ya existe, buscamos en el arreglo de objetos con find(), si no duelve el objeto, se guarda la tarea
        if(!tasksItems.find((task) => task.name === taskName)){
            setTasksItems([...tasksItems, {name: taskName,done: false}]);
        }
    }
//Función para actualizar estado de la tarea
    const toggleTask = task => {
         setTasksItems(
             tasksItems.map((t) => (t.name === task.name ? {...t, done:!t.done}: t))
         );
    };


//useEffect para que al cargar la aplicación revise el localstorage y lea 'tasks' y lo convierta a un objeto con JSON.parse()
//setTaskItems actualiza el estado TaskItemas con los objetos que se devuelven de .parse()
// crear persistencia de datos
    useEffect(() => {
        let data = localStorage.getItem('tasks')
        if (data){
           setTasksItems(JSON.parse(data))
        }
    }, [ ]);

//Eliminar Tarea y ocultar ventana de tareas completadas
    const cleanTask = () => {
        setTasksItems(tasksItems.filter(task => !task.done))
        setShowCompleted(false)
    }



///useEffect para vigilar los datos del formulario y guardarlos cuando cambie. Cuando cambien, guardar en localstore como un arreglo de cadenas
//con el método stringify del objeto JSON, convertir el arreglo de objetos a arreglo de cadenas para poder guardar los datos y utilizarlos
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasksItems))
    }, [tasksItems]);

    return (
    <main className="bg-gray-900 h-lvh text-white">
    <div className="container p-4 mx-auto px-4 md:w-1/2 lg:w-1/3">
        <TaskForm createNewTask={createNewTask}/>
        <TaskList tasks={tasksItems} toggleTask={toggleTask}/>
        <TasksVisibilityControl
            isChecked={showCompleted}
            setShowCompleted={(checked) => setShowCompleted(checked)}
            cleanTask={cleanTask}
        />
        {/* lógica para el despliegue de la lista de tareas completadas*/}
        {showCompleted === true && (
            <TaskList tasks={tasksItems} toggleTask={toggleTask} showCompleted =
                {showCompleted}
            />

        )}
    </div>
    </main>
  );
}

export default App;
