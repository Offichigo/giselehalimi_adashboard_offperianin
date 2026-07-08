import { useTasksOnlySkill } from "../hooks/useTasksOnlySkill";
import trashIcon from "../assets/trash.png";
import addIcon from "../assets/addfiles.png";
import folderIcon from "../assets/folder.png";
import { useState } from "react";

export default function SkillCard({ skill, removeSkill }) {
  const { tasks, removeTask, updateTask } = useTasksOnlySkill(skill.id);
  const [showDesc, setShowDesc] = useState(false);
  const total = tasks.length;
  const done = tasks.filter((task) => task.status === true).length;
  const progress = total === 0 ? 0 : Math.round((done / total) * 100);
  return (
    <div className="skill-card">
      <h2>{skill.name}</h2>
      <button className="buttImg" onClick={() => setShowDesc(!showDesc)}>
        ℹ️
      </button>
      {showDesc && <p>{skill.description}</p>}
      <div
        className="progress-container"
        style={{ background: "#eee", borderRadius: 8, height: 12 }}
      >
        <div
          className="progress-bar"
          style={{
            width: `${progress}%`,
            background: "#d25656",
            height: "100%",
            borderRadius: 8,
            transition: "width 0.3s",
          }}
        />
      </div>
      <span>{progress}%</span>
      {tasks.map((task) => (
        <div className="task-item" key={task.id}>
          {"je sais "}
          {task.name}
          <input
            type="checkbox"
            checked={task.status}
            onChange={() => updateTask(task.id, !task.status)}
          />

          <button className="buttImg" onClick={() => removeTask(task.id)}>
            <img
              className="buttImg"
              src={trashIcon}
              alt="supprimer"
              width={32}
            />{" "}
            Supprimer la tâche
          </button>
        </div>
      ))}
      <button className="buttImg" onClick={() => removeSkill(skill.id)}>
        <img className="buttImg" src={trashIcon} alt="supprimer" width={32} />
      </button>
    </div>
  );
}
