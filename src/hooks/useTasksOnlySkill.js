import { useState, useEffect } from "react";
import {
  getTaskBySkill,
  deleteTaskById,
  updateTaskById,
} from "../services/taskServices";

export function useTasksOnlySkill(skillId) {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    if (!skillId) return; //ne fait si aucun skill selectionné
    const fetchTasks = async () => {
      const data = await getTaskBySkill(skillId);
      setTasks(data);
    };
    fetchTasks();
  }, [skillId]);

  const removeTask = async (id) => {
    await deleteTaskById(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = async (id, status) => {
    await updateTaskById(id, status);
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, status } : task)),
    );
    // setRefresh((prev) => prev + 1);
  };

  return { tasks, removeTask, updateTask };
}
