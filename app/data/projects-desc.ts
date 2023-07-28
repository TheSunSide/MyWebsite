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
].reverse();
