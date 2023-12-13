import React from "react";
import { Link, useParams } from "react-router-dom";

export const DetailPage: React.FC = () => {
  const {id} = useParams();

  return (
    <>
      <h2>Hello from R&M page</h2>
    </>
  );
};
