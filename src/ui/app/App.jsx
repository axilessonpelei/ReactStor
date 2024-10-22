import React, { useState, useEffect } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "../../core/routes/routes.jsx";
import { ContextProvider } from "../../core/context/context.jsx"; // global styles

const App = () => {
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
};

export default App;
