import React from "react";
import SectionIntro from "./../../components/SectionIntro/SectionIntro";
import sketch2 from './sketch2'

const RestoReel = ({sh1}) => {
  return (

      <SectionIntro 
        sectionTitle="04&nbsp;&nbsp;&nbsp;Resto" 
        sId = "Resto"
        slideHeading={sh1} 
        slideSubheading="Resto is built to support the local Rochester community of restaurants by providing a personalized platform for online orders and menus." 
        sketch={sketch2}
        projectLink={"https://xd.adobe.com/view/146d0559-73f3-4f1c-bde8-dbc8668440e0-413e/?fullscreen"}
      />
      
  )
}

export default RestoReel;