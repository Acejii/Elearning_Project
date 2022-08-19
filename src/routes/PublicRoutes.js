import React from "react";
import { Routes, Route } from "react-router-dom";

import { publicRoutes } from "./routes";

const PublicRoutes = () => {
  return (
    <Routes>
      {publicRoutes.map((route, id) => (
        <Route key={id} path={route.path} element={route.component} />
      ))}
    </Routes>
  );
};

export default PublicRoutes;
