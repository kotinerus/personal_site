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
} from "./assets/index";

const projectsList = [
  {
    id: 1,
    name: "Negrar cafe",
    img: negrarMain,
    technology: [reactLogo, jsLogo, sassLogo, htmlLogo, cssLogo],
    description:
      "This is my latest project. Website of the cafe with a co-working area.",
  },
  {
    id: 2,
    name: "Split a bill",
    img: splitMain,
    technology: [reactLogo, jsLogo, sassLogo, htmlLogo, cssLogo],
    description:
      "First application in React.js. The main purpouse of the app is to allow users to easly split a bill between friends.",
  },
  {
    id: 3,
    name: "Giard Design",
    img: giardMain,
    technology: [jsLogo, sassLogo, htmlLogo, cssLogo],
    description:
      "This project was made for recrutation process in adRespect. It's vanilla JavaScript with some librarys.",
  },
  {
    id: 4,
    name: "Task Master",
    img: taskMain,
    technology: [jsLogo, sassLogo, htmlLogo, cssLogo],
    description:
      "Task manager I've build using Bootstrap. Task are saved in your device until erased. I was proud when i first coded this, beacuse I've made it fit my current needs.",
  },
  {
    id: 5,
    name: "100 - The game",
    img: hundredMain,
    technology: [jsLogo, sassLogo, htmlLogo, cssLogo],
    description:
      "A simple game in which two players try to accumulate 100 points as quickly as possible.",
  },
  {
    id: 6,
    name: "Guess my number",
    img: guessMain,
    technology: [jsLogo, sassLogo, htmlLogo, cssLogo],
    description:
      "My first application in JavaScript. It's a simple game I made during my learning process. Player is asked to guess a number and beat his high score ",
  },
];
export default projectsList;
