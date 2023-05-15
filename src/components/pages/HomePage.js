import meIcon from "../img/me.png"

import "./HomePage.css"

export default function Home() {
    return(
        <div className="main">
            <div className="col">
                <img className= "me" src={meIcon} alt="Hayden" />
            </div>
            <div className="col">
                <h1 className="title">Hi, I'm Hayden</h1>
                <p className="text">
                I am a computer science student at the University of California, Davis 
                with a passion for software engineering. 
                As a Junior App Developer at Academy Medtech Ventures, 
                I am gaining valuable experience in the industry. In my free time, 
                I enjoy playing volleyball and spending time at the beach. 
                </p>
            </div>
        </div>
    );
}