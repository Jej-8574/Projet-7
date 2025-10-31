import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import About from "./component/About.jsx";
import Error404 from "./component/404error.jsx";
import ApartmentDetails from "./pages/ApartmentDetails.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/apartment/:id",
    element: <ApartmentDetails />,
  },
  {
    path: "/404",
    element: <Error404 />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
], {
  basename: "/Projet-7"
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
