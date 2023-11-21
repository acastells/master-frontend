import * as averageService from "./averageService";
import "./styles.scss";
import logoImg from "./content/image2.jpg";

/* Using TS*/
const scores: number[] = [80, 75, 60, 99, 94, 30];
const averageScore: number = averageService.getAvg(scores);
const totalScore: number = averageService.getTotalScore(scores);

document.getElementById("numbersTS").innerHTML= scores.toString();
document.getElementById("avgTS").innerHTML= averageScore.toString();
document.getElementById("totalTS").innerHTML= totalScore.toString();

/* Img */
const img = document.createElement("img");
img.src = logoImg;
document.getElementById("imgContainer").appendChild(img);




/* REACT APP */
import React from "react";
import { createRoot } from "react-dom/client";
import { AverageComponent } from "./averageComponent";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Hello from React App</h1>
    <AverageComponent />
  </div>
);



/* USING ENV VARS */
document.getElementById("webpack_mode").textContent = `${process.env.NODE_ENV}`
document.getElementById("webpack_env_secret_key").textContent = `${process.env.SECRET_KEY}`