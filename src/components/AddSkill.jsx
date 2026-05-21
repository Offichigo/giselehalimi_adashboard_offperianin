// + ajout skills input champ nom et description
//bouton pour soumettre le skills
//Un state local pour stocker ce que l'utilisateur tape
import { useState } from "react";
export default function AddSkill({addSkill}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); // empêche le rechargement de la page
    addSkill(name, description);
  };
  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <label>
          Entrer une compétence:{" "}
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <hr />
        <label>
          Description de la compétence
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <hr />
        <button type="submit">Ajouter</button>
      </form>
    </>
  );
}
