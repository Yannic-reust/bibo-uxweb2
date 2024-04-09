import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardTeacher from "./pages/Teacher/DashboardTeacher.jsx";
import DashboardStudent from "./pages/Student/DashboardStudent.jsx";
import store from "./store";
import { Provider } from "react-redux";

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
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
