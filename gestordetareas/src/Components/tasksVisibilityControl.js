

export const TasksVisibilityControl = ({isChecked,setShowCompleted, cleanTask}) => {
    const handleDelete = () => {
        if (window.confirm('Estas seguro que quieres elimar este item?')){
            cleanTask()
        }
    }
    return (
        <div className="flex items-center justify-between p-4 bg-blue-500 rounded-lg">
            <input type='checkbox'
                   checked={isChecked}
                   onChange={e => setShowCompleted(e.target.checked)}
            />{" "}
            <label>Mostrar tareas hechas</label>
            <button
                className=" px-4 bg-blue-200 rounded-md hover:bg-emerald-300
                focus:outline-none focus:ring-emerald-100 focus:ring-opacity-50 transition duration-150 ease-in-out" onClick={(handleDelete)}>
                Limpiar
            </button >
        </div>
    )
}
