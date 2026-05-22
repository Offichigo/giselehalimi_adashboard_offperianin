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
} from "../services/taskServices";
import { useState, useEffect } from "react";

export function useSkillsAndTasks() {
  const [skills, setSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const data = await getAllSkills();
      setSkills(data);
    };
    fetchSkills();
  }, []);

  useEffect(() => {
    if (!selectedSkill) return; //ne fait si aucun skill selectionné
    const fetchTasks = async () => {
      const data = await getTaskBySkill(selectedSkill);
      console.log("toto");
      console.log(data);
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
  };
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
