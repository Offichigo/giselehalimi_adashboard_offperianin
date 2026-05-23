import "./SkillList.css";
import SkillCard from "./SkillCard";

export default function SkillList({ skills, removeSkill }) {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <SkillCard key={skill.id} skill={skill} removeSkill={removeSkill} />
      ))}
    </div>
  );
}
