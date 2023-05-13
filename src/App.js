import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import {RouterProvider, createBrowserRouter} from "react-router-dom";

import Navigation from "./components/layouts/Navigation";
import Home from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ExperiencePage from "./components/pages/ExperiencePage";
import EducationPage from "./components/pages/EducationPage";
import ContactPage from "./components/pages/ContactPage";

const router = createBrowserRouter([
  {
    element: <Navigation />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/education",
        element: <EducationPage />,
      },
      {
        path: "/experience",
        element: <ExperiencePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;