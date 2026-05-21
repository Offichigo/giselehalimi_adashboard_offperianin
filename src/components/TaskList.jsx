export default function TaskList({tasks, removeTask}) {
  return tasks.map((task) => {
    return (
      <div key={task.id}>
        {task.name}
        <button onClick={() => removeTask(task.id)}>Supprimer</button>
      </div>
    );
  });
}
