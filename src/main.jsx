import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeTeacher from "./pages/Teacher/Home/Home.jsx";
import SubjectsTeacher from "./pages/Teacher/Subjects/Subjects.jsx";
import ClassListTeacher from "./pages/Teacher/ClassList/ClassList.jsx";
import HomeworkTeacher from "./pages/Teacher/Homework/Homework.jsx";
import SideNav from "./components/Teacher/Sidenav/Sidenav";

import store from "./store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/teacher",
    element: <HomeTeacher />,
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
      <div className="fixed">
        <SideNav />
      </div>
      <div className="ml-32">
        <RouterProvider router={router} />
      </div>
    </React.StrictMode>
  </Provider>
);
