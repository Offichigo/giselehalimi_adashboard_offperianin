import SkillList from "./components/SkillList";
import AddSkill from "./components/AddSkill";
import TaskList from "./components/TaskList";
import { useSkillsAndTasks } from "./hooks/useSkillsAndTasks";

function App() {
  const {skills, tasks, setSelectedSkill, removeSkill, addSkill, removeTask} = useSkillsAndTasks();
  return (
    <>
      <SkillList 
        skills={skills}
        setSelectedSkill={setSelectedSkill}
        removeTask={removeSkill}
      />
      <TaskList 
        tasks = {tasks}
        removeTask = {removeTask}
      />
      <AddSkill addSkill={addSkill}/>
    </>
  );
}
export default App;
