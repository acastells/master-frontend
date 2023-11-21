import "./styles.scss";
import * as styleClasses from "./stylesOthers.scss";
import image2 from "./content/image2.jpg";

/* appending img */
const img = document.createElement("img");
img.src = image2;
document.getElementById("imgContainer").appendChild(img);

/* USING TS */
const numberA: number = 2;
const numberB: number = 3;
document.getElementById("ts_result").textContent = (numberA + numberB).toString();

/* MODULES CSS */
document.getElementById("otherStylesStuff").className = styleClasses.background;

/* Using React */
import { createRoot } from "react-dom/client";
import { HelloComponent } from "./helloComponent";
const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <HelloComponent />
  </div>
);



/* Using env vars */
document.getElementById("parcel_mode").textContent = process.env.NODE_ENV
document.getElementById("parcel_env_secret_key").textContent = process.env.SECRET_KEY
