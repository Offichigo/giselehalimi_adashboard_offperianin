import ProgressBar from "@ramonak/react-progress-bar";

export default function SkillList({ skills, setSelectedSkill, removeTask }) {
  return skills.map((skill) => {
    console.log(skill.progress);
    var test = 0;
    if (skills.progress) {
      test = skill.progress;
    }
    return (
      <div key={skill.id}>
        {skill.name}
        {/* <ProgressBar completed={test}></ProgressBar> */}
        <button onClick={() => setSelectedSkill(skill.id)}>
          Voir les tâches
        </button>
        <button onClick={() => removeTask(skill.id)}> Supprimer </button>
      </div>
    );
  });
}
