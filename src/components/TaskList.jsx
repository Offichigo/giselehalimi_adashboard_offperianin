export default function TaskList({ tasks, deleteTask }) {
  return tasks.map((task) => {
    return (
      <div key={task.id}>
        {task.name}
        <button onClick={() => deleteTask(task.id)}>Supprimer</button>
      </div>
    );
  });
}
