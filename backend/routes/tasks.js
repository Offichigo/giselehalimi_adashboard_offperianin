import express from "express";
import pool from "./../db.js";

const tasksRouter = express.Router();

tasksRouter.get("/skill/:id", async function (req, res) {
  const { rows } = await pool.query("SELECT * from tasks WHERE skill_id= $1", [
    req.params.id,
  ]);
  res.json(rows);
});

export default tasksRouter;
