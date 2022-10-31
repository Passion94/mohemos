import Quote from "./Quote";
import Topprojects from "./Topprojects";
import Nimbly from "./Nimbly";
import AfterNimbly from "./AfterNimbly";

function Secondbox() {
  return ( 
    
    <div className="second-box">
    
    <Quote/>
       <Topprojects />
       <Nimbly /> 
       <div className="Education-container"> </div>
      <AfterNimbly />
    
    </div>
  );
}

export default Secondbox;
