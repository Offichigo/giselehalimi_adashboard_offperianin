INSERT INTO skills (name,description) VALUES
  ('JavaScript','Un langage de programmation qui permet d''implémenter des mécanismes complexes sur une page web.'),
  ('React','Un des frameworks front-end les plus populaires pour les applications web'),
  ('SQL','Un langage puissant conçu pour interagir avec les bases de données relationnelles'),
  ('PostgreSQL','Un système de gestion de base de données relationnelle orienté objet puissant et open source'),
  ('Node.js','Une plateforme de développement Javascript');

 INSERT INTO tasks (name, description, status, skill_id) VALUES
('Déclarer une variable', 'Utiliser let, const ou var', false, 1),
('Écrire une fonction', 'Déclarer et appeler une fonction', false, 1),
('Manipuler le DOM', 'Sélectionner et modifier des éléments HTML', false, 1),
('Créer un composant', 'Écrire un composant fonctionnel React', false, 2),
('Utiliser useState', 'Gérer un état local dans un composant', false, 2),
('Écrire un SELECT', 'Récupérer des données depuis une table', false, 3),
('Écrire un INSERT', 'Ajouter des données dans une table', false, 3),
('Créer une table', 'Écrire un CREATE TABLE avec des colonnes', false, 4),
('Lancer un serveur', 'Démarrer un serveur Node.js', false, 5);