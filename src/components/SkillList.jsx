import SkillCard from "./SkillCard";
export default function SkillList({ skills, removeSkill }) {
  return skills.map((skill) => (
    <SkillCard key={skill.id} skill={skill} removeSkill={removeSkill} />
  ));
}
