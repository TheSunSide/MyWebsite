import scrabble1 from "../assets/scrabble1-0.png";
import scrabble2 from "../assets/scrabble1-1.png";
import scrabble3 from "../assets/scrabble1-2.png";
import scrabble4 from "../assets/scrabble2-0.png";
import scrabble5 from "../assets/scrabble2-1.png";
import scrabble6 from "../assets/scrabble2-2.png";

export type ProjectDesc = {
  name: string;
  year: string;
  keyPoints: string[];
  FRkeyPoints: string[];
  FRname: string;
  technologies: string[];
  link: string;
  images?: string[];
};
export const projectsDesc: ProjectDesc[] = [
  {
    name: "Becoming human",
    FRname: "Becoming human",
    year: "2020",
    keyPoints: [
      "Developed during the final semester of my cegep's (Lionel-Groulx) courses",
      "A team of 4 developers must create a game in 4 months, using Unity and C#, including material from the mathematics and physics courses",
      "The game is a 3D platformer where the player must solve puzzles to progress through the levels",
      "I was in charge of the game's physics, the player's movement and the camera's movement",
      "I also helped with the level design",
      "I was responsible for the team management and the planning",
    ],
    FRkeyPoints: [
      "Développé durant le dernier semestre de mon cegep (Lionel-Groulx)",
      "Une équipe de 4 développeurs doit créer un jeu en 4 mois, en utilisant Unity et C#, incluant du matériel des cours de mathématiques et de physique",
      "Le jeu est un jeu de plateforme 3D où le joueur doit résoudre des énigmes pour progresser dans les niveaux",
      "J'étais en charge de la physique du jeu, du mouvement du joueur et du mouvement de la caméra",
      "J'ai aussi aidé avec le design des niveaux",
      "J'étais responsable de la gestion de l'équipe et de la planification",
    ],
    technologies: ["C#", "Unity"],
    link: "/cegep",
  },
  {
    name: "Chess",
    FRname: "Échecs",
    year: "2021",
    keyPoints: [
      "Developed for a school project",
      "A duo of developers must create a chess game in a month, using C++ and Qt",
      "The game must be playable in a terminal and in a GUI, using Qt",
      "I used the MVVM design pattern to separate the logic from the view",
    ],
    FRkeyPoints: [
      "Développé pour un projet scolaire",
      "Un duo de développeurs doit créer un jeu d'échecs en un mois, en utilisant C++ et Qt",
      "Le jeu doit être jouable dans un terminal et dans une interface graphique, en utilisant Qt",
      "J'ai utilisé le patron de conception MVVM pour séparer la logique de la vue",
    ],
    technologies: ["C++", "Qt"],
    link: "/chess",
  },
  {
    name: "Embedded system",
    FRname: "Système embarqué",
    year: "2021",
    keyPoints: [
      "Developed for a school project",
      "A team of 4 developers must create an embedded system in 2 months, using avr-gcc and SimulIDE",
      "The system must be able to control a robot, using various buttons and sensors, and display information through an IC2 channel",
      "I was in charge of the multiplexers, the sensors, and the construction of the library with avr-ar",
    ],
    FRkeyPoints: [
      "Développé pour un projet scolaire",
      "Une équipe de 4 développeurs doit créer un système embarqué en 2 mois, en utilisant avr-gcc et SimulIDE",
      "Le système doit être capable de contrôler un robot, en utilisant divers boutons et capteurs, et d'afficher des informations via un canal IC2",
      "J'étais en charge des multiplexeurs, des capteurs et de la construction de la bibliothèque avec avr-ar",
    ],
    technologies: ["C++", "C", "atmel studio", "atmega324pa"],
    link: "/embedded",
  },
  {
    name: "Scrabble",
    FRname: "Scrabble",
    year: "2022",
    keyPoints: [
      "Developed though the winter semester of 2022 at Polytechnique Montreal",
      "A team of 4 developers must create a scrabble game in 4 months, following the Agile methodology",
      "The game must be playable on browsers, delivered through a REST API and socket.io",
      "I was in charge of the game's communication with the server, some of the game's UI, the DevOps and the CI/CD pipeline",
      "I also helped with the game's logic and the server's logic",
    ],
    FRkeyPoints: [
      "Développé durant le trimestre d'hiver de 2022 à Polytechnique Montreal",
      "Une équipe de 4 développeurs doit créer un jeu de scrabble en 4 mois, en suivant la méthodologie Agile",
      "Le jeu doit être jouable sur les navigateurs, livré via une API REST et socket.io",
      "J'étais en charge de la communication du jeu avec le serveur, d'une partie de l'interface utilisateur, du DevOps et du pipeline CI/CD",
      "J'ai aussi aidé avec la logique du jeu et la logique du serveur",
    ],
    technologies: [
      "TypeScript",
      "Angular",
      "Node.js",
      "MongoDB",
      "AWS",
      "GitLab",
    ],
    link: "/scrabble",
    images: [scrabble1, scrabble2, scrabble3],
  },
  {
    name: "Teaching assistant",
    FRname: "Chargé des travaux pratiques",
    year: "2022 - ...",
    keyPoints: [
      "I am a teaching assistant for the course INF1900 at Polytechnique Montreal",
      "I help approximately 40 students with their projects, which are to create a robot that can follow a line, avoid obstacles and solve a maze",
      "I also help with the course's labs, which are to learn how to use the microcontroller and the sensors",
      "I have to correct the students' code and give them feedback",
    ],
    FRkeyPoints: [
      "Je suis un assistant d'enseignement pour le cours INF1900 à Polytechnique Montreal",
      "J'aide environ 40 étudiants avec leurs projets, qui sont de créer un robot qui peut suivre une ligne, éviter les obstacles et résoudre un labyrinthe",
      "J'aide aussi avec les laboratoires du cours, qui sont d'apprendre à utiliser le microcontrôleur et les capteurs",
      "Je dois corriger le code des étudiants et leur donner des commentaires",
    ],
    technologies: ["C++", "C", "atmel studio", "atmega324pa"],
    link: "/ta",
  },
  {
    name: "Summer Internship in Web Development",
    FRname: "Stage d'été en développement web",
    year: "2022",
    keyPoints: [
      "I was hired to produce a web application for the company, and to implement certain technologies for the future projects",
      "I was in charge of the project's architecture, the CI/CD pipeline, the DevOps, the database, the API, the front-end and the back-end",
      "My main goal was to create templates for future projects, and to implement technologies that would be useful for the company",
      "I produced a web application for clients to access their data, and to manage their account with Angular",
      "I implemented the authentication with Auth0 on the front-end and the back-end",
      "I implemented subscriptions with Stripe on the front-end and the back-end",
      "I created several back-end services to manage the data and the authentication on Cloudflare Workers",
      "I created utility scripts for the company, such as a Cloudflare Worker that sends emails from a template",
    ],
    FRkeyPoints: [
      "J'ai été embauché pour produire une application web pour l'entreprise, et pour implémenter certaines technologies pour les futurs projets",
      "J'étais en charge de l'architecture du projet, du pipeline CI/CD, du DevOps, de la base de données, de l'API, du front-end et du back-end",
      "Mon objectif principal était de créer des modèles pour les futurs projets, et d'implémenter des technologies qui seraient utiles pour l'entreprise",
      "J'ai produit une application web pour que les clients puissent accéder à leurs données et gérer leur compte avec Angular",
      "J'ai implémenté l'authentification avec Auth0 sur le front-end et le back-end",
      "J'ai implémenté les abonnements avec Stripe sur le front-end et le back-end",
      "J'ai créé plusieurs services back-end pour gérer les données et l'authentification sur Cloudflare Workers",
      "J'ai créé des scripts utilitaires pour l'entreprise, comme un Cloudflare Worker qui envoie des courriels à partir d'un modèle",
    ],
    technologies: ["TypeScript", "Angular", "Node.js", "Cloudflare"],
    link: "/internship-1",
  },
  {
    name: "Evolution project",
    FRname: "Projet d'évolution",
    year: "2023",
    keyPoints: [
      "Developed though the winter semester of 2023 at Polytechnique Montreal",
      "A team of 4 developpers must update an existing project (Scrabble), following the Agile methodology",
      "The game must be playable on a desktop application and on mobile, delivered through a REST API and socket.io",
      "I was in charge of the game's communication with the server, some of the game's UI, the DevOps, the updated game logic and the CI/CD pipeline",
      "We had to create new functionalities for the game, such as a chat, a friend system, a leaderboard and a new game mode",
      "We had to write an SRS (Software Requirements Specification), an SDD (Software Design Document) and some other documents",
    ],
    FRkeyPoints: [
      "Développé durant le trimestre d'hiver de 2023 à Polytechnique Montreal",
      "Une équipe de 4 développeurs doit mettre à jour un projet existant (Scrabble), en suivant la méthodologie Agile",
      "Le jeu doit être jouable sur une application de bureau et sur mobile, livré via une API REST et socket.io",
      "J'étais en charge de la communication du jeu avec le serveur, d'une partie de l'interface utilisateur, du DevOps, de la logique du jeu mise à jour et du pipeline CI/CD",
      "Nous devions créer de nouvelles fonctionnalités pour le jeu, comme un chat, un système d'amis, un classement et un nouveau mode de jeu",
      "Nous devions écrire un SRS (Software Requirements Specification), un SDD (Software Design Document) et d'autres documents",
    ],
    technologies: [
      "TypeScript",
      "Angular",
      "Node.js",
      "MongoDB",
      "Google Cloud",
      "Flutter",
      "Figma",
      "GitLab",
    ],
    link: "/evolution",
    images: [scrabble4, scrabble5, scrabble6],
  },
  {
    name: "CS Games - Atlantis",
    FRname: "CS Games - Atlantis",
    year: "2023",
    keyPoints: [
      "Part of the Polytechnique Montreal's team for the CS Games 2023",
      "The CS Games is a competition between universities in Canada and the United States",
      "I participated in the security challenge",
      "I had to find vulnerabilities in a web application, and to exploit them to get the flag, with SQL injection, XSS, and more",
      "I had to find a flag in an image file using steganography",
      "I also participated in the relay programming challenge",
      "I had to write a program that would solve a problem, and to pass it to the next person in the relay",
      "And I participated in the mobile app challenge using Maui (C#)",
    ],
    FRkeyPoints: [
      "Partie de l'équipe de Polytechnique Montreal pour les CS Games 2023",
      "Les CS Games sont une compétition entre les universités du Canada et des États-Unis",
      "J'ai participé au défi de sécurité",
      "J'ai dû trouver des vulnérabilités dans une application web, et les exploiter pour obtenir le flag, avec de l'injection SQL, XSS, et plus",
      "J'ai dû trouver un flag dans un fichier image en utilisant de la stéganographie",
      "J'ai aussi participé au défi de programmation en relais",
      "J'ai dû écrire un programme qui résoudrait un problème, et le passer à la personne suivante dans le relais",
      "Et j'ai participé au défi d'application mobile en utilisant Maui (C#)",
    ],
    technologies: ["C#", "Python", "C++", "Linux"],
    link: "/csgames2023",
  },
  {
    name: "Personal website",
    FRname: "Site web personnel",
    year: "2023 - ...",
    keyPoints: [
      "This website is a personal project",
      "I wanted to create a website to showcase my past projects and my skills",
      "I also wanted to learn how to use Remix and Tailwind",
    ],
    FRkeyPoints: [
      "Ce site web est un projet personnel",
      "Je voulais créer un site web pour présenter mes projets passés et mes compétences",
      "Je voulais aussi apprendre à utiliser Remix et Tailwind",
    ],
    technologies: ["TypeScript", "React", "Remix", "Tailwind", "Cloudflare"],
    link: "/website",
  },
  {
    name: "Machine PM",
    FRname: "La Machine PM",
    year: "2023-...",
    keyPoints: [
      "Developed though the winter semester of 2023 at Polytechnique Montreal",
      "A team of developers, electrical engineers and mechanical engineers must create a machine to compete in the Engineering Games",
      "The solution must be able to place balls in specific locations, both autonomously and manually",
      "I was in charge of a part of the communication between the microcontroller and the computer, the computer's UI",
      "The communication from the UI (Angular) was done through WebSockets, and the communication from the microcontroller was done through TCP sockets, so a need to translate was needed",
      "The server was multithreaded and done in Rust, it was also responsible for holding the state of the several machines connected to it, and capturing the controller's inputs",
    ],
    FRkeyPoints: [
      "Développé durant le trimestre d'hiver de 2023 à Polytechnique Montreal",
      "Une équipe de développeurs, d'ingénieurs électriques et d'ingénieurs mécaniques doit créer une machine pour participer aux Jeux de Génie",
      "La solution doit être capable de placer des balles à des endroits spécifiques, à la fois de manière autonome et manuelle",
      "J'étais en charge d'une partie de la communication entre le microcontrôleur et l'ordinateur, et de l'interface utilisateur de l'ordinateur",
    ],
    technologies: ["TypeScript", "Angular", "Rust", "C++"],
    link: "/machine-epm-2023",
  },
  {
    name: "CS Games - ChlorophyllAI",
    FRname: "CS Games - ChlorophyllAI",
    year: "2024",
    keyPoints: [
      "Part of the executive committee for Polytechnique Montreal's team for the CS Games 2024 as the Technical Vice-President",
      "I was responsible for the team's exams, the team's selection and the team's training",
      "The CS Games is a competition between universities in Canada and the United States",
      "Contributions to come, with the link to the prepared exams (Feb 2024)",
    ],
    FRkeyPoints: [
      "Partie du comité exécutif de l'équipe de Polytechnique Montreal pour les CS Games 2024 en tant que vice-président technique",
      "J'étais responsable des examens de l'équipe, de la sélection de l'équipe et de la formation de l'équipe",
      "Les CS Games sont une compétition entre les universités du Canada et des États-Unis",
      "Contributions à venir, avec le lien vers les examens préparés (Feb 2024)",
    ],
    technologies: [
      "C#",
      "Python",
      "C++",
      "Linux",
      "GitHub",
      "angular",
      "C",
      "Docker",
      "React",
      "Rust",
      "PostgreSQL",
    ],
    link: "/csgames2024",
  },
  {
    name: "Vice-President of Treasury - CEGL - Poly",
    FRname: "Vice-président à la trésorerie - CEGL - Poly",
    year: "2023-2024",
    keyPoints: [
      "I was elected as the Vice-President of Treasury for the software engineering student comitee of Polytechnique Montreal (CEGL Poly)",
      "I was responsible for the budget and the finances of the CEGL Poly",
      "I was responsible for the financial reports and the financial planning",
      "I was responsible for the financial management of the CEGL Poly",
      "I was also responsible of organizing reunions with the student association, and with the accounting of the association",
      "I was also responsible of dealing with the executives of the comitee Poly",
      "I was also partly responsible of the organization of the events of the CEGL Poly",
    ],
    FRkeyPoints: [
      "J'ai été élu vice-président à la trésorerie pour le comité étudiant de génie logiciel de Polytechnique Montreal (CEGL Poly)",
      "J'étais responsable du budget et des finances du CEGL Poly",
      "J'étais responsable des rapports financiers et de la planification financière",
      "J'étais responsable de la gestion financière du CEGL Poly",
      "J'étais aussi responsable de l'organisation de réunions avec l'association étudiante, et de la comptabilité de l'association",
      "J'étais aussi responsable de traiter avec les exécutifs du comité Poly",
      "J'étais aussi partiellement responsable de l'organisation des événements du CEGL Poly",
    ],
    technologies: [], // ["Excel", "Word", "Google Sheets", "Google Docs", "Google Slides"],
    link: "/cegl-poly",
  },
].reverse();
