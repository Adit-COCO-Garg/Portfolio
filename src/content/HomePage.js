import React from "react";
import AboutReel from "./AboutReel/AboutReel"
import ContactReel from "./ContactReel";
import RestoReel from "./RestoReel";
import ResumeReel from "./ResumeReel";
import RoasterReel from "./RoasterReel";
import NymisojoReel from "./NymisojoReel";


const Homepage = () => {
  const s1h1 = <>Hi, I’m Adit. <br /> I’m a creative software <br /> engineer and designer!</>
  const s2h1 = <>New York & Michigan <br /> Solutions Journalism <br /> platform</>
  const s3h1 = <>Roaster</>
  const s4h1 = <>Resto</>
  return (
    <div id="page-content-container">
         <section className="content-sections">
          <AboutReel sh1={s1h1}/>
         </section>

         <section className="content-sections">
          <NymisojoReel sh1={s2h1} />
         </section>

         <section className="content-sections">
          <RoasterReel sh1={s3h1}  />
         </section>

         <section className="content-sections">
          <RestoReel sh1={s4h1}  />
         </section>

         <section className="content-sections">
          <ContactReel/>
         </section>

         <section className="content-sections">
          <ResumeReel />
         </section>
    </div>
  )
 
};

export default Homepage;