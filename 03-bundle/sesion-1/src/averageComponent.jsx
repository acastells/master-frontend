import React from "react";
// import { getAvg } from "./averageService";

export const AverageComponent = () => {
  const [average, setAverage] = React.useState(0);

  React.useEffect(() => {
    const scores = [90, 75, 60, 99, 94, 30];
    setAverage(scores[0]);
  }, []);

  return (
    <div className="red-background">
      <span>Students average: {average}</span>
    </div>
  );
};
