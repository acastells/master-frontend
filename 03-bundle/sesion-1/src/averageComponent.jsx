import React from "react";
// import { getAvg } from "./averageService";
import classes from './averageComponent.scss';


export const AverageComponent = () => {
  const [average, setAverage] = React.useState(0);

  React.useEffect(() => {
    const scores = [90, 75, 60, 99, 94, 30];
    setAverage(scores[0]);
  }, []);

  return (
    <div className={classes["result-background"]}>
      <span>Students average: {average}</span>
    </div>
  );
};
