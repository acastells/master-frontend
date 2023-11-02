import "./styles.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

import logoImg from "./content/image.jpg"

// ES6
const userName = "Arnau";
const greetings = `Hello ${userName}`;

const averageScore = 90;
const messageToDisplay = `The average score is ${averageScore};`

document.write(messageToDisplay)

const img = document.createElement("img");
img.src = logoImg;
document.getElementById("imgContainer").appendChild(img);

console.log(greetings);