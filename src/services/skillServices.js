const BASE_URL = "http://localhost:3000/skills";

export async function deleteSkillById(id) {
    await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
}

export async function addNewSkill(name,description) {
    const res = await fetch(`${BASE_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description }),
    });
    if (!res.ok) throw new Error("Erreur lors de l'ajout du skill");
    return res.json();
}

export async function getAllSkills() {
    const res = await fetch(`${BASE_URL}`);
    if (!res.ok) throw new Error("Erreur lors de la récupérations des skills");
    return res.json();
}

export async function getSkillById(id) {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) throw new Error("Erreur lors de la récupérations du skill by id");
    return res.json();
}