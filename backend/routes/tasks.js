import express from "express";
import pool from "./../db.js";

const tasksRouter = express.Router();

tasksRouter.get("/skill/:id", async function (req, res) {
  const { rows } = await pool.query("SELECT * from tasks WHERE skill_id= $1", [
    req.params.id,
  ]);
  res.json(rows);
});

tasksRouter.post("/", async (req, res) => {
  const { name, description, skill_id } = req.body;
  const { rows } = await pool.query(
    "INSERT INTO tasks (name, description, skill_id) VALUES ($1, $2, $3) RETURNING *",
    [name, description, skill_id],
  );
  res.status(201).json(rows[0]);
});

tasksRouter.put("/:id", async (req, res) => {
  await pool.query("UPDATE tasks SET status = $1 WHERE id = $2", [
    req.body.status,
    req.params.id,
  ]);
  res.json({ message: "Tasks is done" });
});

tasksRouter.delete("/:id", async (req, res) => {
  console.log();
  await pool.query("DELETE FROM tasks WHERE id = $1", [req.params.id]);
  res.json({ message: "Delete a tasks" });
});

tasksRouter.get("/progressBar/:id", async function (req, res) {
  const { rows } = await pool.query("SELECT * from tasks WHERE skill_id= $1", [
    req.params.id,
  ]);
  let taskComplete = 0;
  rows.forEach((row) => {
    if (row.status) taskComplete += 1;
  });

  res.json(taskComplete / rows.length);
});
export default tasksRouter;
