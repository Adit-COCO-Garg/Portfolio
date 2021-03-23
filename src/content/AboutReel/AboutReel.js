import React from "react";
import sketch1 from "./sketch1";
import SectionIntro from "./../../components/SectionIntro/SectionIntro";
import rain from "./assets/rain.jpg";
import dum from "./assets/dumdum.jpg";
import collage from "./assets/collage.jpg";

const AboutReel = ({sh1}) => {
  return (
    <>
      <SectionIntro
        sectionTitle="01&nbsp;&nbsp;&nbsp;Who am I?" 
        sId = "Who-am-I"
        slideHeading={sh1} 
        slideSubheading="I love creating immersive, functional, and scalable experiences." 
        sketch={sketch1}
      />
      <article className="slide">
        <h1>This quote resonates through and through with me. It describes the foundations of my core, who I am and why I do what I do.</h1>
        <blockquote cite="https://www.16personalities.com/enfp-personality">It doesn’t interest me what you do for a living. I want to know what you ache for – and if you dare to dream of meeting your heart’s longing. 
          It doesn’t interest me how old you are., or how rich you are. I  want to know if you will risk looking like a fool – for love – 
          for your dreams – for the adventure of being alive.</blockquote>
          <img src={rain} />
      </article>
      <article className="slide one3">
        <h1>My journey</h1>
        <p>
          I started my journey with tech and code when I was in third grade, writing my first few lines of qBasic code.
          Seeing the turtle move to your whims on a screen - would give anyone a power trip and a manaical laugh. <br /><br />
          Years later after making it through the trenches of high school against the might of International Baccalaureate. 
          I got into RIT! And this place is more home to me than any other place ever was. The people I met the friends I met.
          All of it is engraved onto my heart! <br /><br />
          Charlotte AKA DUMDUM - my best friend on the right. I along with my friends did everything from doughnuts in a 
          parking lot to 3 AM spontaneous trip to NYC.
        </p>
        <img src={dum} />
      </article>
      {/* <article className="slide one4">
        <h1>Things I love and enjoy at a glance!</h1>
      
        <img src={collage} />
      </article> */}
    </>
  );
}

export default AboutReel;