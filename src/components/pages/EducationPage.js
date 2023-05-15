import UCDIcon from '../img/UCD.png';
import MCIcon from '../img/MC.png';

export default function EducationPage() {
    return (
      <div className="main">
            <div className="col1">
                <img className= "me" src={UCDIcon} alt="UCDavis" />
            </div>
            <div className="col2">
                <h2 className="title">B.S. In Computer Science</h2>
                <p className="text">
                some text
                </p>
            </div>
            <div className="col1">
                <img className= "me" src={MCIcon} alt="Moorpark College" />
            </div>
            <div className="col2">
                <h2 className="title">Associates in Mathematics, Phyics, and Computer Science</h2>
                <p className="text"> 
                some text
                </p>
            </div>
        </div>
    );
  }