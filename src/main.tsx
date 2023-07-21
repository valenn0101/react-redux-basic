import "./main.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // Componente que queremos cargar
    errorElement: <Error />,
    children: [
      {
        path: "contacts/:id", //Rutas dinamicas
        element: <Contact />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Error />,
  },
]);

const container = document.getElementById("root");
const root = createRoot(container as HTMLDivElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
