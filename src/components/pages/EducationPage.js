import UCDIcon from '../img/UCD.png';
import MCIcon from '../img/MC.png';

import "./EducationPage.css"

export default function EducationPage() {
    return (
      <div className="main">
            <div className="col1">
                <img className= "davis" src={UCDIcon} alt="UCDavis" />
            </div>
            <div className="col2">
                <h2 className="title">B.S. In Computer Science</h2>
                <p className="text">
                My time at UC Davis has been an amazing learning experience. Some of my notable courses include: 
                OOP in C++, Computer Architecture, Data Structures, Statistical Modeling, Algorithm design, OS & 
                System programming, AI, and Software Engineering.
                </p>
            </div>
            <div className="col1">
                <img className= "moorpark" src={MCIcon} alt="Moorpark College" />
            </div>
            <div className="col2">
                <h2 className="title">A.S. in Mathematics, Phyics, and Computer Science</h2>
                <p className="text"> 
                Starting my journey at Moorpark College was a great decision. I was able to take a variety of courses in a 
                comfortable environment where I could focus on my studies. Here I managed to complete my general education 
                requirements and get on the dean's list in Fall and Spring of 2022 for my academic performance.
                </p>
            </div>
        </div>
    );
}