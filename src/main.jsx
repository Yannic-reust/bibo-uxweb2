import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardTeacher from "./pages/Teacher/DashboardTeacher.jsx";
import DashboardStudent from "./pages/Student/DashboardStudent.jsx";

const router = createBrowserRouter([
  {
    path: "/teacher",
    element: <DashboardTeacher />,
  },
  {
    path: "/student",
    element: <DashboardStudent />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
