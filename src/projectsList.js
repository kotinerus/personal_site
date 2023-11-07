import {
  jsLogo,
  reactLogo,
  htmlLogo,
  cssLogo,
  sassLogo,
  negrarMain,
  splitMain,
  giardMain,
  taskMain,
  hundredMain,
  guessMain,
  socialMain,
} from "./assets/index";

const projectsList = [
  {
    id: 1,
    name: "Social",
    production: true,
    img: socialMain,
    technology: [reactLogo, jsLogo, sassLogo, htmlLogo, cssLogo],
    link: "https://kotinerus.github.io/social/",
    description: "Little project for fun.",
  },
  {
    id: 2,
    name: "Negrar cafe",
    production: true,
    img: negrarMain,
    technology: [reactLogo, jsLogo, sassLogo, htmlLogo, cssLogo],
    link: "https://kotinerus.github.io/cafe-negrar/",
    description:
      "This is my latest project. Website of the cafe with a co-working area.",
  },
  {
    id: 3,
    name: "Split a bill",
    production: false,
    img: splitMain,
    technology: [reactLogo, jsLogo, sassLogo, htmlLogo, cssLogo],
    link: "https://kotinerus.github.io/spitABill_React/",
    description:
      "First application in React.js. The main purpouse of the app is to allow users to easly split a bill between friends.",
  },
  {
    id: 4,
    name: "Giard Design",
    production: false,
    img: giardMain,
    technology: [jsLogo, sassLogo, htmlLogo, cssLogo],
    link: "https://kotinerus.github.io/zadanieRekrutacyjne/",
    description:
      "This project was made for recrutation process in adRespect. It's vanilla JavaScript with some librarys.",
  },
  {
    id: 5,
    name: "Task Master",
    production: false,
    img: taskMain,
    technology: [jsLogo, sassLogo, htmlLogo, cssLogo],
    link: "https://kotinerus.github.io/taskManager/",
    description:
      "Task manager I've build using Bootstrap. Task are saved in your device until erased. I was proud when i first coded this, beacuse I've made it fit my current needs.",
  },
  {
    id: 6,
    name: "100 - The game",
    production: false,
    img: hundredMain,
    technology: [jsLogo, sassLogo, htmlLogo, cssLogo],
    link: "https://kotinerus.github.io/100-Game/",
    description:
      "A simple game in which two players try to accumulate 100 points as quickly as possible.",
  },
  {
    id: 7,
    name: "Guess my number",
    production: false,
    img: guessMain,
    technology: [jsLogo, sassLogo, htmlLogo, cssLogo],
    link: "https://kotinerus.github.io/guessMyNumber-Game/",
    description:
      "My first application in JavaScript. It's a simple game I made during my learning process. Player is asked to guess a number and beat his high score ",
  },
];
export default projectsList;
