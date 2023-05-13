import React from "react";
import Navbar from "./components/Navbar";
import AboutPage from "./components/pages/AboutPage";
import AboutPage from "./components/pages/AboutPage";
import ExperiencePage from "./components/pages/ExperiencePage";
import EducationPage from "./components/pages/EducationPage";

export default function App() {
  return (
    <main>
      <Navbar />
      <AboutPage />
      <ExperiencePage />
      <EducationPage />
    </main>
  );
}