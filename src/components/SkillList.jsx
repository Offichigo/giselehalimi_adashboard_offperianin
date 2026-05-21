export default function SkillList({skills, setSelectedSkill, removeTask}) {
  return skills.map((skill) => {
    return (
      <div key={skill.id}>
        {skill.name}
        <button onClick={() => setSelectedSkill(skill.id)}>
          Voir les tâches
        </button>
        <button onClick={() => removeTask(skill.id)}> Supprimer </button>
      </div>
    );
  });
}
