import express from "express";
import pool from "./../db.js";

const router = express.Router();

router.get("/", async function (req, res) {
  const { rows } = await pool.query("SELECT * FROM skills");
  res.json(rows);
});

router.post("/", async (req, res) => {
  const { name, description } = req.body;
  const { rows } = await pool.query(
    "INSERT INTO skills (name, description) VALUES ($1, $2) RETURNING *",
    [name, description],
  );
  res.status(201).json(rows[0]);
});

router.delete("/:id", async (req, res) => {
  await pool.query("DELETE FROM skills WHERE id = $1", [req.params.id]);
  res.json({ message: "Delete a skills" });
});

export default router;
