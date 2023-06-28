export type ProjectDesc = {
  name: string;
  year: string;
  keyPoints: string[];
  technologies: string[];
  link: string;
};
export const projectsDesc: ProjectDesc[] = [
  {
    name: "Becoming human",
    year: "2020",
    keyPoints: [
      "Developed during the final semester of my cegep's (Lionel-Groulx) courses",
      "A team of 4 developers must create a game in 4 months, using Unity and C#, including material from the mathematics and physics courses",
      "The game is a 3D platformer where the player must solve puzzles to progress through the levels",
      "I was in charge of the game's physics, the player's movement and the camera's movement",
      "I also helped with the level design",
      "I was responsible for the team management and the planning",
    ],
    technologies: ["C#", "Unity"],
    link: "/cegep",
  },
  {
    name: "Chess",
    year: "2021",
    keyPoints: [
      "Developed for a school project",
      "A duo of developers must create a chess game in a month, using C++ and Qt",
      "The game must be playable in a terminal and in a GUI, using Qt",
      "I used the MVVM design pattern to separate the logic from the view",
    ],
    technologies: ["C++", "Qt"],
    link: "/chess",
  },
  {
    name: "Embedded system",
    year: "2021",
    keyPoints: [
      "Developed for a school project",
      "A team of 4 developers must create an embedded system in 2 months, using avr-gcc and SimulIDE",
      "The system must be able to control a robot, using various buttons and sensors, and display information through an IC2 channel",
      "I was in charge of the multiplexers, the sensors, and the construction of the library with avr-ar",
    ],
    technologies: ["C++", "C", "atmel studio", "atmega324pa"],
    link: "/embedded",
  },
  {
    name: "Scrabble",
    year: "2022",
    keyPoints: [
      "Developed though the winter semester of 2022 at Polytechnique Montreal",
      "A team of 4 developers must create a scrabble game in 4 months, following the Agile methodology",
      "The game must be playable on browsers, delivered through a REST API and socket.io",
      "I was in charge of the game's communication with the server, some of the game's UI, the DevOps and the CI/CD pipeline",
      "I also helped with the game's logic and the server's logic",
    ],
    technologies: [
      "TypeScript",
      "Angular",
      "Node.js",
      "MongoDB",
      "AWS",
      "gitlab",
    ],
    link: "/scrabble",
  },
  {
    name: "Teaching assistant",
    year: "2022 - ...",
    keyPoints: [
      "I am a teaching assistant for the course INF1900 at Polytechnique Montreal",
      "I help approximately 40 students with their projects, which are to create a robot that can follow a line, avoid obstacles and solve a maze",
      "I also help with the course's labs, which are to learn how to use the microcontroller and the sensors",
      "I have to correct the students' code and give them feedback",
    ],
    technologies: ["C++", "C", "atmel studio", "atmega324pa"],
    link: "/ta",
  },
  {
    name: "Summer Internship in Web Development",
    year: "2022",
    keyPoints: [
      "I was hired to produce a web application for the company, and to implement certain technologies for the future projects",
      "I was in charge of the project's architecture, the CI/CD pipeline, the DevOps, the database, the API, the front-end and the back-end",
      "My main goal was to create templates for future projects, and to implement technologies that would be useful for the company",
      "I produced a web application for clients to access their data, and to manage their account with Angular",
      "I implemented  the authentication with Auth0 on the front-end and the back-end",
      "I implemented  subscriptions with Stripe on the front-end and the back-end",
      "I created several back-end services to manage the data and the authentication on Cloudflare Workers",
      "I created utility scripts for the company, such as a Cloudflare Worker that sends emails from a template",
    ],
    technologies: ["TypeScript", "Angular", "Node.js", "Cloudflare"],
    link: "/internship-1",
  },
  {
    name: "Evolution project",
    year: "2023",
    keyPoints: [
      "Developed though the winter semester of 2023 at Polytechnique Montreal",
      "A team of 4 developpers must update an existing project (Scrabble), following the Agile methodology",
      "The game must be playable on a desktop application and on mobile, delivered through a REST API and socket.io",
      "I was in charge of the game's communication with the server, some of the game's UI, the DevOps, the updated game logic and the CI/CD pipeline",
      "We had to create new functionalities for the game, such as a chat, a friend system, a leaderboard and a new game mode",
      "We had to write an SRS (Software Requirements Specification), an SDD (Software Design Document) and some other documents",
    ],
    technologies: [
      "TypeScript",
      "Angular",
      "Node.js",
      "MongoDB",
      "Google Cloud",
      "gitlab",
      "Flutter",
    ],
    link: "/evolution",
  },
  {
    name: "Personal website",
    year: "2023 - ...",
    keyPoints: [
      "This website is a personal project",
      "I wanted to create a website to showcase my projects and my skills",
      "I also wanted to learn how to use Remix and Tailwind",
    ],
    technologies: ["TypeScript", "React", "Remix", "Tailwind", "Cloudflare"],
    link: "/website",
  },
].reverse();
