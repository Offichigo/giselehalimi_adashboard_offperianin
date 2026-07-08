import {
  deleteSkillById,
  addNewSkill,
  getAllSkills,
  getSkillById,
} from "../services/skillServices";
import {
  getTaskBySkill,
  deleteTaskById,
  updateTaskById,
  getProgressValueBySkill,
} from "../services/taskServices";
import { useState, useEffect } from "react";

export function useSkillsAndTasks() {
  const [skills, setSkills] = useState([]);
  // const [selectedSkill, setSelectedSkill] = useState(null);
  // const [tasks, setTasks] = useState([]);
  const [refresh, setRefresh] = useState(0);

  // useEffect(() => {
  //   const fetchSkills = async () => {
  //     const data = await getAllSkills();
  //     setSkills(data);
  //   };
  //   fetchSkills();
  // }, []);

  const removeSkill = async (id) => {
    await deleteSkillById(id);
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  const addSkill = async (name, description) => {
    const res = await addNewSkill(name, description);
    setSkills([...skills, res]);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllSkills();
      const skillsWithProgress = await Promise.all(
        data.map(async (skill) => {
          const progress = await getProgressValueBySkill(skill.id);
          return { ...skill, progress };
        }),
      );
      setSkills(skillsWithProgress);
    };
    fetchData();
  }, [refresh]); // ← se lance au montage ET après chaque refresh

  return {
    skills,
    removeSkill,
    addSkill,
  };
}
