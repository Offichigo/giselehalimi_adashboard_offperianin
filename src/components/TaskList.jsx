export default function TaskList({ tasks, deleteTask, updateTask }) {
  return tasks.map((task) => {
    return (
      <div key={task.id}>
        {"je sais "}
        {task.name}
        <input
          type="checkbox"
          checked={task.status}
          onChange={() => updateTask(task.id, !task.status)}
        ></input>
        <button onClick={() => deleteTask(task.id)}>Supprimer</button>
      </div>
    );
  });
}
