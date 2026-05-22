import React, { useState, useEffect } from "react";
import SkillList from "./components/SkillList";
import AddSkill from "./components/AddSkill";
import TaskList from "./components/TaskList";
import Header from "./components/Header";

function App() {
  const [skills, setSkills] = useState([]);

  const deleteSkill = async (id) => {
    await fetch(`http://localhost:3000/skills/${id}`, { method: "DELETE" });
    setSkills(skills.filter((skill) => skill.id !== id));
  };
  //addSkill fetch method post
  const addSkill = async (name, description) => {
    const response = await fetch(`http://localhost:3000/skills`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description }),
    });
    //Recupére la reponse en json
    const data = await response.json();
    //met à jour dans le state
    setSkills([...skills, data]);
  };

  const addTask = async (name, description) => {
    const response = await fetch(`http://localhost:3000/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description }),
    });
    const data = await response.json();
    setSkills([...tasks, data]);
  };

  useEffect(() => {
    const fetchSkills = async () => {
      const response = await fetch("http://localhost:3000/skills");
      const data = await response.json();
      setSkills(data);
    };
    fetchSkills();
  }, []);

  const [tasks, setTasks] = useState([]);

  const deleteTask = async (id) => {
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = async (id, status) => {
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, status } : task)),
    );
  };

  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    if (!selectedSkill) return; //ne fait si aucun skill selectionné
    const fetchTasks = async () => {
      const reponse = await fetch(
        `http://localhost:3000/tasks/skill/${selectedSkill}`,
      );
      const data = await reponse.json();
      setTasks(data);
    };
    fetchTasks();
  }, [selectedSkill]);
  //relance si selected skill change

  return (
    <>
      <Header></Header>
      <SkillList
        skills={skills}
        deleteSkill={deleteSkill}
        setSelectedSkill={setSelectedSkill}
      />
      <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
      <AddSkill addSkill={addSkill} />
    </>
  );
}
export default App;
