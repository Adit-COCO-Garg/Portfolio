import React from "react";
import Linkedin from "./assets/linkedin.svg";
import Github from "./assets/github.svg";
import StackOverflow from "./assets/stack-overflow.svg";
import Behance from "./assets/behance.svg";
import { HashLink } from "react-router-hash-link";


const HeaderNav = () => { 

  return (
    <>
      <div className="l-nav">
        <HashLink className="h1-adit" to="#top">Adit</HashLink>
        <nav>
          <HashLink smooth to="/#Who-am-I">01&nbsp;&nbsp;&nbsp;Who am I?</HashLink> 
          <HashLink smooth to="/#NYMI-SOJO">02&nbsp;&nbsp;&nbsp;NYMI<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SOJO</HashLink> 
          <HashLink smooth to="/#Roaster">03&nbsp;&nbsp;&nbsp;Roaster</HashLink> 
          <HashLink smooth to="/#Resto">04&nbsp;&nbsp;&nbsp;Resto</HashLink>  
          <HashLink smooth to="/#Contact">05&nbsp;&nbsp;&nbsp;What can<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I do to<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;help you?</HashLink>  
          <HashLink smooth to="/#Resume">06&nbsp;&nbsp;&nbsp;Resume</HashLink>  
        </nav>
      </div>
      <div className="r-nav">
        
          <h1>07<br />Social</h1> 
          <nav>
          <a href="https://www.behance.net/aditgarg2178df"><img src={Behance} alt="" /></a> 
          <a href="https://github.com/Adit-COCO-Garg"><img src={Github} alt="" /></a> 
          <a href="https://www.linkedin.com/in/aditgarg21k/"><img src={Linkedin} alt="" /></a> 
          <a href="https://stackoverflow.com/users/8639892/adit-coco"><img src={StackOverflow} alt="" /></a> 
          </nav>
      </div>
    </>
  );
};

export default HeaderNav;