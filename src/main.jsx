import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardTeacher from "./pages/Teacher/Home/DashboardTeacher.jsx";
import SubjectsTeacher from "./pages/Teacher/Subjects/Subjects.jsx";
import ClassListTeacher from "./pages/Teacher/ClassList/ClassList.jsx";
import HomeworkTeacher from "./pages/Teacher/Homework/Homework.jsx";

import DashboardStudent from "./pages/Student/DashboardStudent.jsx";
import store from "./store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/teacher/dashboard",
    element: <DashboardTeacher />,
  },
  {
    path: "/teacher/homework",
    element: <HomeworkTeacher />,
  },
  {
    path: "/teacher/subjects",
    element: <SubjectsTeacher />,
  },
  {
    path: "/teacher/classList",
    element: <ClassListTeacher />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
