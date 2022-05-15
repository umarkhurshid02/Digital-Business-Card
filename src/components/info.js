import React from "react";
import ProfilePicture from "../assets/me.PNG";
import EmailIcon from "../assets/email.png";
import Linked from "../assets/linked.png";
import './info.css';
function Info(){
    return(
        <div>
         <img className="Me" 
          src={ProfilePicture}
          alt="Me"
         />
     <div className="tb">
         
        
         <h1 className="name">Umar Khurshid</h1>
         <h3 className="do">Web Developer</h3>

         <div className="buttons">
         <a 
         href="mailto:umarkhurshid02@gmail.com"
         target="blank"
         className="email">
             <img className="eimg" src={EmailIcon} alt=""  />
             Email</a> 
         <a 
           href="https://www.linkedin.com/feed/"
           target="blank"
         className="linkedin">
             <img className="elink" src={Linked} alt=""  />
             Linkedin
         </a> 
         </div>
         <h3 className="website">No Website</h3>
         </div>    
    </div>
    )
}

export default Info;