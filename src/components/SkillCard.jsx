import { useTasksOnlySkill } from "../hooks/useTasksOnlySkill";

export default function SkillCard({ skill, removeSkill }) {
  const { tasks, removeTask, updateTask } = useTasksOnlySkill(skill.id);
  const total = tasks.length;
  const done = tasks.filter((task) => task.status === true).length;
  const progress = total === 0 ? 0 : Math.round((done / total) * 100);
  return (
    <div>
      {skill.name}
      <div style={{ background: "#eee", borderRadius: 8, height: 12 }}>
        <div
          style={{
            width: `${progress}%`,
            background: "#af4c4c",
            height: "100%",
            borderRadius: 8,
            transition: "width 0.3s",
          }}
        />
      </div>
      <span>{progress}%</span>
      {tasks.map((task) => (
        <div key={task.id}>
          {"je sais "}
          {task.name}
          <input
            type="checkbox"
            checked={task.status}
            onChange={() => updateTask(task.id, !task.status)}
          />

          <button onClick={() => removeTask(task.id)}>Supprimer</button>
        </div>
      ))}
      <button onClick={() => removeSkill(skill.id)}>
        Supprimer une compétence
      </button>
    </div>
  );
}
