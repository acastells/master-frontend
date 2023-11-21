import React from "react";
import logo from "./content/image1.jpg";
import * as classes from "./stylesReact.scss";

export const HelloComponent: React.FC = () => {
  return (
    <div>
      <img src={logo} />
      <h2 className={classes.background}>Hello from React App</h2>
    </div>
  );
};