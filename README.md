📊 Adashboard
Un tableau de bord interactif pour visualiser et gérer des compétences et leurs tâches associées.
🛠️ Stack technique
ÉlémentTechnologieFrontendReact + ViteBackendExpress.jsBase de donnéesPostgreSQLConteneurDocker
📁 Structure du projet
adashboard/
├── backend/
│ ├── routes/
│ │ ├── skills.js # Routes CRUD pour les compétences
│ │ └── tasks.js # Routes pour les tâches
│ ├── db/
│ │ ├── docker-compose.yml
│ │ └── init.sql # Création des tables
│ ├── db.js # Connexion PostgreSQL
│ ├── index.js # Point d'entrée du serveur
│ └── .env # Variables d'environnement
├── src/
│ ├── components/
│ │ ├── SkillList.jsx # Liste des compétences
│ │ └── TaskList.jsx # Tâches d'une compétence
│ ├── App.jsx
│ └── main.jsx
└── README.md
⚙️ Installation

1. Cloner le projet
   bashgit clone <url-du-repo>
   cd adashboard
2. Lancer la base de données
   bashcd db
   docker compose up -d
3. Installer et lancer le backend
   bashcd backend
   npm install
   node index.js
4. Installer et lancer le frontend
   bashcd ..
   pnpm install
   pnpm dev
   🌐 URLs
   ServiceURLFrontendhttp://localhost:5173Backendhttp://localhost:3000PostgreSQLlocalhost:5433
   🗄️ Base de données
   Table skills
   ColonneTypeDescriptionidSERIALIdentifiant uniquenameVARCHAR(255)Nom de la compétencedescriptionTEXTDescriptiondateDATEDate de création
   Table tasks
   ColonneTypeDescriptionidSERIALIdentifiant uniqueskill_idINTEGERRéférence vers la compétencenameVARCHAR(255)Nom de la tâchedescriptionTEXTDescriptionstatusBOOLEANTâche validée ou non
   🔌 API Routes
   MéthodeRouteDescriptionGET/skillsRécupérer toutes les compétencesPOST/skillsCréer une compétenceDELETE/skills/:idSupprimer une compétenceGET/tasks/skill/:idRécupérer les tâches d'une compétence
   🔧 Variables d'environnement
   Créer un fichier .env dans le dossier backend/ :
   POSTGRES_USER=admin
   POSTGRES_PASSWORD=admin
   POSTGRES_DB=adashboard
   POSTGRES_PORT=5433
