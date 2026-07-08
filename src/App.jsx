import SkillList from "./components/SkillList";
import AddSkill from "./components/AddSkill";
import Header from "./components/Header";
import { useSkillsAndTasks } from "./hooks/useSkillsAndTasks";

function App() {
  const { skills, removeSkill, addSkill } = useSkillsAndTasks();

  return (
    <>
      <Header />
      <SkillList skills={skills} removeSkill={removeSkill} />
      <AddSkill addSkill={addSkill} />
    </>
  );
}
export default App;
