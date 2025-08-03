import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { StrictMode } from "react";
import router from "./router/routes";
import { RouterProvider } from "react-router-dom";

const container = document.getElementById("root");

if (!container) throw new Error("404!Root is Not Present!");

const root = createRoot(container);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
