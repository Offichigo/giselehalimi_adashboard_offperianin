// + ajout skills input champ nom et description
//bouton pour soumettre le skills
//Un state local pour stocker ce que l'utilisateur tape
import { useState } from "react";
import addfiles from "../assets/addfiles.png";

export default function AddSkill({ addSkill }) {
  const [name, setName] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); // empêche le rechargement de la page
    addSkill(name, description);
  };
  return (
    <>
      <button
        className="add-btn"
        title="Ajouter une compétence"
        onClick={() => setShowForm(true)}
      >
        <img src={addfiles} alt="ajouter" width={32} />
      </button>

      {showForm && (
        <div className="popup">
          <form onSubmit={handleSubmit}>
            <label className="add-btn">
              Entrer une compétence:{" "}
              <input value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <hr />
            <label className="add-btn">
              Description de la compétence:{" "}
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <button className="add-btn" type="submit">
              Ajouter
            </button>
            <button className="stop-btn" onClick={() => setShowForm(false)}>
              Annuler
            </button>
          </form>
        </div>
      )}
    </>
  );
}
