import meIcon from "../img/me.png"
import React, { useEffect } from "react";
import AboutPage from "./AboutPage";
import ExperiencePage from "./ExperiencePage";
import EducationPage from "./EducationPage";
import ContactPage from "./ContactPage";

import "./HomePage.css"

export default function Home() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecting) {
                    entry.target.classList.remove('hidden');
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                    entry.target.classList.add('hidden');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el))
    });

    return (
        <div>
            <div id="home" className="main">
                <div className="section hidden">
                    <div className="col">
                        <img className="me" src={meIcon} alt="Hayden" />
                    </div>
                    <div className="col">
                        <h1 className="title">Hi, I'm Hayden 👋</h1>
                        <p className="text">
                            I am a computer science student at the University of California, Davis
                            with a passion for software engineering.
                            As a Junior App Developer at Academy Medtech Ventures,
                            I am gaining valuable experience in the industry. In my free time,
                            I enjoy playing volleyball and spending time at the beach.
                        </p>
                    </div>
                </div>
            </div>
            <div id="education" className="section hidden">
                <EducationPage />
            </div>
            <div id="experience" className="section hidden">
                <ExperiencePage />
            </div>
            {/* <div id="about" className="section">
            <AboutPage />
            </div> */}
            <div id="contact" className="section hidden">
                <ContactPage />
            </div>
        </div>
    );
}