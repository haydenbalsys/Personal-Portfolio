import AMVIcon from '../img/amv.png';
import SAIcon from '../img/sa.png';
import ReactIcon from "../img/react.png";
import FirebaseIcon from "../img/firebase.png";
import CSSIcon from "../img/css.png";
import JSIcon from "../img/js.png";
import HTMLIcon from "../img/html.png";
import PythonIcon from "../img/python.png";
import CIcon from "../img/c++.png";

import "./ExperiencePage.css"

export default function ExperiencePage() {
    return (
      <div className="main">
            <div className="col1">
                <img className= "amv" src={AMVIcon} alt="Academy Medtech Ventures" />
            </div>
            <div className="col2">
                <h2 className="title">Academy Medtech Ventures</h2>
                <p className="text">
                As a Junior Software Engineer at Academy Medtech Ventures, I leverage my skills 
                in front and backend development using Firebase web hosting and Firestore database. 
                I actively contribute to a team focused on creating and maintaining cognitive medical 
                technology aimed at enhancing athletic capabilities and optimizing recovery processes. 
                I'm adept at ensuring company proficiency through active participation in weekly team 
                meetings and have added value by creating 200+ user authentication rule unit tests & 100+ 
                UI tests using Jest. Moreover, I am at the forefront of leading the development of a full-stack 
                React web application.
                </p>
            </div>
            <div className="col1">
                <img className= "sa" src={SAIcon} alt="Sports Academy" />
            </div>
            <div className="col2">
                <h2 className="title">Sports Academy</h2>
                <p className="text"> 
                During my time doing General Operations at Sports Academy, I played an integral role 
                in setting up various social and sporting events, including tournaments. My 
                responsibilities extended to providing high-quality service to customers within the 
                facility during these events. In addition, I successfully facilitated an inviting and 
                professional environment for patrons and partnered meetings, thereby enhancing the overall 
                experience for all attendees.
                </p>
            </div>
            <div className="col3">
              <h2 className="title">Projects</h2>
              <p className="text"> 
              <div className="project">
                <h5>Word Puzzle:</h5>
                <p className="desc">
                  An animated word game that connect two parts of a word to form a new word.
                  This project taught me a vast knowledge of C++ and the use of object oriented programming.
                  </p>
                </div>
                <div className="project">
                <h5>Simple Shell:</h5>
                <p className="desc">
                  A simple shell that can execute commands and redirect input and output. This taught me about 
                  programming at the system level and how to use system calls. Programming in C was a new experience
                  for me and I learned a lot about memory management and pointers.
                  </p>
                </div>
                <div className="project">
                <h5>Thread Library:</h5>
                <p className="desc">
                  A thread library that implements a user-level thread library. To create this, I used queues, 
                  thread control blocks, semaphores, preemption, and context switching. This project taught me
                  about the inner workings of threads  on an opreating system and how to implement them.
                  </p>
                </div>
              </p>
            </div>
            <div className="col2">
                <h2 className="title">Languages & Technologies</h2>
                <div className="languages">
                  <img className= "HTML" src={HTMLIcon} alt="html" />
                  <img className= "CSS" src={CSSIcon} alt="css" />
                  <img className= "JS" src={JSIcon} alt="js" />
                  <img className= "C++" src={CIcon} alt="C++" />
                </div>
                <div className="technologies">
                  <img className= "React" src={ReactIcon} alt="react" />
                  <img className= "Firebase" src={FirebaseIcon} alt="firebase" />
                  <img className= "Python" src={PythonIcon} alt="python" />
                </div>
            </div>
        </div>
    );
}