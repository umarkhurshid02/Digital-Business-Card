import React from "react";
import './footer.css'
import Insta from '../assets/insta.png'
import Fb from '../assets/fb.png'
import Lk from '../assets/linkedin.png'
import Twt from '../assets/twt.png'
function Footer()
{
    return(
    <footer>
     <div className="footer">
      <a  href=" https://www.instagram.com/_umvrz/"
      target="blank">
          <img className="insta"
           src={Insta}/>
          
      </a>   
      <a  href="https://www.facebook.com/umarkhurshid02/"
      target="blank">
          <img className="fb"
           src={Fb}/>
      </a> 
      <a  href="https://www.linkedin.com/in/umar-khurshid-865792208/"
      target="blank">
          <img className="lk"
           src={Lk}/>
      </a> 
      <a  href="https://twitter.com/umarkhurshid02"
      target="blank">
          <img className="tw"
           src={Twt}/>
      </a> 
     </div>
     </footer>
    )
}

export default Footer;