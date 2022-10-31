import {FaCalendarAlt, FaCertificate} from "react-icons/fa";


function AfterNimbly() {
  return (
    
      <div className="after-nimbly">

        <h1><FaCertificate className="fa-certificate fa-icon"/><span id="education"> Education</span> </h1>
        <div className="bachelor">
        <h2> Bachelor's Degree | Accra Institute of Technology, Ghana</h2>

        <p className="micro"> <FaCalendarAlt className="fa-icon"/> 2013- 2016 </p>

        <h4 > Overall Best Graduating Student award </h4>

        <ul>
          <li> First-Class Degree in Computer Science </li>
          <li> Data Structure & Algorithm </li>
          <li> Artificial Intelligence, Machine Learning & Expert System</li>
          <li> Computer Vision </li>
          <li> Computer Graphics & Animation </li>
          <li> Worked as Web-Developer at School IT Department </li>
          <li> Developed summer class management system </li>
          <li> Championed Official School website Re-Development</li>
        </ul>
        </div>
        <hr/>
        <div className="diploma">
          <h2> Diploma | Highland College of Technology, Nigeria</h2>
          <p className="micro"> <FaCalendarAlt className="fa-icon"/> 2010-2012 </p>
          <ul>
            <li> Upper Credit in Software Engineering </li>
            <li>Took classes in C++, Java, PHP, Database(SQL Sever, Mysql),Virtual Basic </li>
            <li> Developed eLibrary system </li>
            <li> Developed JAMB Exam CBT System </li>
          </ul>
        </div> {/* End of diploma */}
        <hr/>
        <div className="machine-learning">
          <h1> Machine Learning | Coursera</h1>
          <p className="micro">
          <FaCalendarAlt className="fa-icon"/> 2016
          </p>
          <p> AI & Machine Learning </p>
        </div> {/* End of machine-learning */}

        <div className="system-security">
          <h2> System Security | ISACA</h2>
          <p className="micro fa-calender"> <FaCalendarAlt className="fa-icon"/> 2015</p>
          <p> System Security Awareness</p>
        </div> {/* End of system-security */}

      </div> 
        
    
  );
}

export default AfterNimbly;
