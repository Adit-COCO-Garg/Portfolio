import React from "react";
import SectionIntro from "./../../components/SectionIntro/SectionIntro";
import sketch2 from './sketch2'

const NymisojoReel = ({sh1} ) => {
  return (
    <SectionIntro 
        sectionTitle="02&nbsp;&nbsp;&nbsp;NY&MI SOJO"
        sId = "NYMI-SOJO" 
        slideHeading={sh1} 
        slideSubheading="Platform to raise awareness about the caregiving crisis in NA by providing journalists a place to publish articles and the public to read them." 
        sketch={sketch2}
      />

  )
}

export default NymisojoReel;