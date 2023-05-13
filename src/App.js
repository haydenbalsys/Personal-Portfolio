import React from "react";
import Navbar from "./components/layouts/Navbar";
import AboutPage from "./components/pages/AboutPage";
import ExperiencePage from "./components/pages/ExperiencePage";
import EducationPage from "./components/pages/EducationPage";
import ContactPage from "./components/pages/ContactPage";

export default function App() {
  return (
    <main>
      <Navbar />
      <AboutPage />
      <ExperiencePage />
      <EducationPage />
      <ContactPage />
    </main>
  );
}