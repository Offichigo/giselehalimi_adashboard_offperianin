export default function SkillList({ skills, deleteSkill, setSelectedSkill }) {
  return skills.map((skill) => {
    return (
      <div key={skill.id}>
        {skill.name}
        <button onClick={() => setSelectedSkill(skill.id)}>
          Voir les tâches
        </button>
        <button onClick={() => deleteSkill(skill.id)}> Supprimer </button>
      </div>
    );
  });
}
