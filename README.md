# 📊 Adashboard

Un tableau de bord interactif pour visualiser et gérer des compétences et leurs tâches associées.

## 🛠️ Stack technique

| Élément | Technologie |
|---|---|
| Frontend | React + Vite |
| Backend | Express.js |
| Base de données | PostgreSQL |
| Conteneur | Docker |

## 📁 Structure du projet

```
adashboard/
├── backend/
│   ├── routes/
│   │   ├── skills.js       # Routes CRUD pour les compétences
│   │   └── tasks.js        # Routes pour les tâches
│   ├── db/
│   │   ├── docker-compose.yml
│   │   └── init.sql        # Création des tables
│   ├── db.js               # Connexion PostgreSQL
│   ├── index.js            # Point d'entrée du serveur
│   └── .env                # Variables d'environnement
├── src/
│   ├── components/
│   │   ├── SkillList.jsx   # Liste des compétences
│   │   └── TaskList.jsx    # Tâches d'une compétence
│   ├── App.jsx
│   └── main.jsx
└── README.md
```

## ⚙️ Installation

### 1. Cloner le projet

```bash
git clone <url-du-repo>
cd adashboard
```

### 2. Lancer la base de données

```bash
cd db
docker compose up -d
```

### 3. Installer et lancer le backend

```bash
cd backend
npm install
node index.js
```

### 4. Installer et lancer le frontend

```bash
cd ..
pnpm install
pnpm dev
```

## 🌐 URLs

| Service | URL |
|---|---|
| Frontend | http://localhost:5173 |
| Backend | http://localhost:3000 |
| PostgreSQL | localhost:5433 |

## 🗄️ Base de données

### Table `skills`

| Colonne | Type | Description |
|---|---|---|
| id | SERIAL | Identifiant unique |
| name | VARCHAR(255) | Nom de la compétence |
| description | TEXT | Description |
| date | DATE | Date de création |

### Table `tasks`

| Colonne | Type | Description |
|---|---|---|
| id | SERIAL | Identifiant unique |
| skill_id | INTEGER | Référence vers la compétence |
| name | VARCHAR(255) | Nom de la tâche |
| description | TEXT | Description |
| status | BOOLEAN | Tâche validée ou non |

## 🔌 API Routes

| Méthode | Route | Description |
|---|---|---|
| GET | /skills | Récupérer toutes les compétences |
| POST | /skills | Créer une compétence |
| DELETE | /skills/:id | Supprimer une compétence |
| GET | /tasks/skill/:id | Récupérer les tâches d'une compétence |

## 🔧 Variables d'environnement

Créer un fichier `.env` dans le dossier `backend/` :

```
POSTGRES_USER=admin
POSTGRES_PASSWORD=admin
POSTGRES_DB=adashboard
POSTGRES_PORT=5433
```
