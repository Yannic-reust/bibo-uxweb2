import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeTeacher from "./pages/Teacher/Home/Home.jsx";
import HomeStudent from "./pages/Student/Home/Home.jsx";
import SubjectsTeacher from "./pages/Teacher/Subjects/Subjects.jsx";
import ClassListTeacher from "./pages/Teacher/ClassList/ClassList.jsx";
import HomeworkTeacher from "./pages/Teacher/Homework/Homework.jsx";
import SideNavTeacher from "./components/Teacher/Sidenav/Sidenav";
import SideNavStudent from "./components/Student/Sidenav/Sidenav";

import store from "./store";
import { Provider } from "react-redux";

const url = window.location.href;

function cutURL(url, searchString) {
  var startIndex = url.indexOf(searchString);

  return startIndex !== -1;
}

const router = createBrowserRouter([
  {
    path: "/teacher",
    element: <HomeTeacher />,
  },
  {
    path: "/student",
    element: <HomeStudent />,
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
        {cutURL(url, "teacher") && <SideNavTeacher />}
        {cutURL(url, "student") && <SideNavStudent />}
      </div>
      <div className="ml-32">
        <RouterProvider router={router} />
      </div>
    </React.StrictMode>
  </Provider>
);
