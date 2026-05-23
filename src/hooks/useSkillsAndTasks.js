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
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [refresh, setRefresh] = useState(0);

  // useEffect(() => {
  //   const fetchSkills = async () => {
  //     const data = await getAllSkills();
  //     setSkills(data);
  //   };
  //   fetchSkills();
  // }, []);

  useEffect(() => {
    if (!selectedSkill) return; //ne fait si aucun skill selectionné
    const fetchTasks = async () => {
      const data = await getTaskBySkill(selectedSkill);
      setTasks(data);
    };
    fetchTasks();
  }, [selectedSkill]);

  const removeSkill = async (id) => {
    await deleteSkillById(id);
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  const addSkill = async (name, description) => {
    const res = await addNewSkill(name, description);
    setSkills([...skills, res]);
  };

  const removeTask = async (id) => {
    await deleteTaskById(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = async (id, status) => {
    await updateTaskById(id, status);
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, status } : task)),
    );
    setRefresh((prev) => prev + 1);
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
    tasks,
    setSelectedSkill,
    removeSkill,
    addSkill,
    removeTask,
    updateTask,
  };
}
