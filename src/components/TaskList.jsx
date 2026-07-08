export default function TaskList({ tasks, removeTask, updateTask }) {
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
        <button onClick={() => removeTask(task.id)}>Supprimer</button>
      </div>
    );
  });
}
