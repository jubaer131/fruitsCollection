import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./Component/Dashboard";
import { FontsizeProvider } from "./ContextProvider/FontsizeProvider";
import Root from "./Component/Root";
import Apple from "./AllRouts/Apple";
import Banana from "./AllRouts/Banana";
import Mango from "./AllRouts/Mango";
import Orange from "./AllRouts/Orange";
import Grapes from "./AllRouts/Grapes";
import Pineapple from "./AllRouts/Pineapple";
import Watermelon from "./AllRouts/Watermelon";
import Spinach from "./AllRouts/Spinach";
import Carrot from "./AllRouts/Carrot";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/apple",
        element: <Apple></Apple>,
      },
      {
        path: "/banana",
        element: <Banana></Banana>,
      },
      {
        path: "/mango",
        element: <Mango></Mango>,
      },
      {
        path: "/orange",
        element: <Orange></Orange>,
      },
      {
        path: "/grapes",
        element: <Grapes></Grapes>,
      },
      {
        path: "/pineapple",
        element: <Pineapple></Pineapple>,
      },
      {
        path: "/watermelon",
        element: <Watermelon></Watermelon>,
      },
      {
        path: "/spinach",
        element: <Spinach></Spinach>,
      },
      {
        path: "/carrot",
        element: <Carrot></Carrot>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FontsizeProvider>
      <RouterProvider router={router} />
    </FontsizeProvider>
  </StrictMode>
);

