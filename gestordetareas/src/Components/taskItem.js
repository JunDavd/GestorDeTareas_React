
export const TaskItem = ({task,toggleTask}) => {
    return (
        <tr>
            <td className="flex justify-between items-center py-3 px-[272px] border-b border-gray-200">
                <span className={`${task.done ? 'line-through text-gray-500' : 'text-white'}`}>
                    {task.name}
                </span>
                <input type='checkbox' //input que recibe la propiedad .done, si esta en True, la casilla se marca
                       checked={task.done}
                       onChange={() => toggleTask(task)}

                />
            </td>
        </tr>
    )
}
