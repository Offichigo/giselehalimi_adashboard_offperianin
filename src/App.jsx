import SkillList from "./components/SkillList";
import AddSkill from "./components/AddSkill";
import TaskList from "./components/TaskList";
import { useSkillsAndTasks } from "./hooks/useSkillsAndTasks";
import Header from "./components/Header";

function App() {
  const {
    skills,
    tasks,
    setSelectedSkill,
    removeSkill,
    addSkill,
    removeTask,
    updateTask,
  } = useSkillsAndTasks();
  return (
    <>
      <Header></Header>
      <SkillList
        skills={skills}
        setSelectedSkill={setSelectedSkill}
        removeTask={removeSkill}
      />
      <TaskList tasks={tasks} removeTask={removeTask} updateTask={updateTask} />
      <AddSkill addSkill={addSkill} />
    </>
  );
}
export default App;
