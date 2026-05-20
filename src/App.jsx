import React, { useState, useEffect } from "react";
import SkillList from "./components/SkillList";

function App() {
  const [skills, setSkills] = useState([]);
  const deleteSkill = async (id) => {
    await fetch(`http://localhost:3000/skills/${id}`, { method: "DELETE" });
    setSkills(skills.filter((skill) => skill.id !== id));
  };
  useEffect(() => {
    const fetchSkills = async () => {
      const response = await fetch("http://localhost:3000/skills");
      const data = await response.json();
      setSkills(data);
    };
    fetchSkills();
  }, []);
  return <SkillList skills={skills} deleteSkill={deleteSkill} />;
}
export default App;
