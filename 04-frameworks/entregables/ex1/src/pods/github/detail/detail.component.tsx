import React from "react";
import { Link, useParams } from "react-router-dom";
import { routes } from "@/router";

export const Detail: React.FC = () => {
  const {id} = useParams();

  return (
    <>
      <h2>Hello from Detail page</h2>
      <h3>User Id: {id}</h3>
      <Link to={routes.github.list}>Back to list page</Link>
    </>
  );
};
