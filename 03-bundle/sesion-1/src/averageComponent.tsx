import React from "react";
import { getAvg } from "./averageService";
import classes from './averageComponent.scss';

export const AverageComponent = () => {
  const [average, setAverage] = React.useState(0);

  React.useEffect(() => {
    const scores = [90, 75, 60, 99, 94, 30];
    setAverage(getAvg(scores));
  }, []);

  return (
    <div className="averageComponent">
      <div className={classes.resultBackground}>
        <span>Students average: {average}</span>
      </div>
    </div>
  );
};
