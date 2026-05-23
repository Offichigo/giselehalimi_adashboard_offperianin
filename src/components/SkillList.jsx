export default function SkillList({ skills, setSelectedSkill, removeTask }) {
  return skills.map((skill) => {
    var progress = 0;
    if (skill.progress) {
      progress = skill.progress*100;
    }
    return (
      <div key={skill.id}>
        {skill.name}
        <div style={{ background: "#eee", borderRadius: 8, height: 12 }}>
          <div style={{
            width: `${progress}%`,
            background: "#4caf50",
            height: "100%",
            borderRadius: 8,
            transition: "width 0.3s"
          }} />
        </div>
        <span>{progress}%</span>
        <button onClick={() => setSelectedSkill(skill.id)}>
          Voir les tâches
        </button>
        <button onClick={() => removeTask(skill.id)}> Supprimer </button>
      </div>
    );
  });
}
