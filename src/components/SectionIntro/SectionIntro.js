import React from "react";
import P5Wrapper from 'react-p5-wrapper';
import Github from './assets/github.png';
import Project from './assets/project.png';
// import sketch1 from "./../../content/AboutReel/sketch1";

const SectionIntro = ({sectionTitle, slideHeading, slideSubheading, sketch, sId, git, projectLink}) => {
  return (
    <>
    {/* <h1 className="section-title" id={sId}>{sectionTitle}</h1> */}
    <article>
      <P5Wrapper sketch={sketch} />
      <h1 className='h1-jumbotron'>{slideHeading}</h1>
      <div className="section-links">
        {git && <a href="" >Code Repo</a>}
         <a href="https://nymisojo-front.herokuapp.com/" >Live Project</a>
      </div>
      
      <p>{slideSubheading}</p>
      
    </article>
    </>
  )
}

export default SectionIntro;