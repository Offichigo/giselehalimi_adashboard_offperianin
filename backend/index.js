import cors from "cors";
import express from "express";
import skillsRouter from "./routes/skills.js";
import tasksRouter from "./routes/tasks.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/skills/", skillsRouter);
app.use("/tasks/", tasksRouter);

app.listen(3000, () => {
  console.log("🚀 Serveur lancé : http://localhost:3000");
});
