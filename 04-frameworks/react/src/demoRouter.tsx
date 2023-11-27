import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./login.page";
import { ListPage } from "./list.page";
import { DetailPage } from "./detail.page";

const PublicRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="*" element={<div>404 not found!</div>} />
    </Routes>
  );
};

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="list" element={<ListPage />} />
      <Route path="detail" element={<DetailPage />} />
      <Route path="*" element={<div>404 not found!</div>} />
    </Routes>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/public/*" element={<PublicRouter />} />
        <Route path="/app/*" element={<AppRouter />} />
      </Routes>
    </BrowserRouter>
  );
};

export const Demo: React.FC = () => {
  return (
    <>
      <header>
        <h1>App Title</h1>
      </header>
      <Router />
    </>
  );
};
