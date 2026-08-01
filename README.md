# Chelka Bank Frontend

Interface web simple pour une banque vitrine, réalisée en HTML, CSS et JavaScript.

## Objectif

Créer une page statique qui affiche des informations clients et des mouvements financiers récupérés depuis une API REST, avec un design responsive.

## Technologie utilisée

- HTML5
- CSS3
- JavaScript
- Fetch API

## Structure du projet

```bash
task03/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Fonctionnalités

- Hero section marketing
- Section de services
- Affichage dynamique des clients depuis une API
- Tableau des derniers mouvements
- Mise en page responsive
- Fallback local si l’API est inaccessible

## Lancer le projet

### Option 1 : via un serveur local simple

Depuis le dossier du projet, exécutez :

```bash
npx serve
```

Puis ouvrez l’URL affichée dans le terminal.

### Option 2 : avec Python

```bash
python -m http.server 8000
```

Ensuite ouvrez :

```text
http://localhost:8000
```

## API utilisée

Le projet utilise par défaut :

```text
https://jsonplaceholder.typicode.com/users
```

## Auteur

Projet réalisé dans le cadre de la tâche 3 frontend.
