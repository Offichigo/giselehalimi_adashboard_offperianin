export default function SkillList({ skills, deleteSkill }) {
  return skills.map((skill) => {
    return (
      <div key={skill.id}>
        {skill.name}
        <button onClick={() => deleteSkill(skill.id)}> Supprimer </button>
      </div>
    );
  });
}
