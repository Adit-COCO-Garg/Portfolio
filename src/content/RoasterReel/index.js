import React from "react";
import SectionIntro from "./../../components/SectionIntro/SectionIntro";
import sketch1 from './sketch1'


const RoasterReel = ({sh1}) => {
  return (
    <SectionIntro 
      sectionTitle="03&nbsp;&nbsp;&nbsp;Roaster" 
      sId = "Roaster"
      slideHeading={sh1} 
      slideSubheading="Much like a mum, guilt trips and roasts you for not doing your work and procastinating by sending you messenger texts." 
      sketch={sketch1}
      projectLink={"https://www.facebook.com/RoasterApp"}
    />
  )
}
export default RoasterReel;