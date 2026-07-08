const BASE_URL = "http://localhost:3000/tasks";

export async function getTaskBySkill(skill) {
  const res = await fetch(`${BASE_URL}/skill/${skill}`);
  if (!res.ok) throw new Error("Erreur récupération des tâches");
  return res.json();
}

export async function deleteTaskById(id) {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
}

export async function updateTaskById(id, status) {
  await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
}

export async function getProgressValueBySkill(skill) {
  const res = await fetch(`${BASE_URL}/progressBar/${skill}`);
  if (!res.ok)
    throw new Error("Erreur récupération de la barre de progression");
  return res.json();
}
