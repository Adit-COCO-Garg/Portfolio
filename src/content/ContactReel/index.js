import React, {useEffect} from "react";

const ContactReel = () => {
  useEffect(()=>{
    let qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; 
    if(!gi.call(d,id)) { 
      js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q); 
    } 

},[]);
  return (
    <>
     <h1 className="section-title" id="Contact">05&nbsp;&nbsp;&nbsp;What can I do to help you?</h1>
      <article>
        <div className="typeform-widget" data-url="https://form.typeform.com/to/akEPdF?typeform-medium=embed-snippet" data-hide-headers="true" data-hide-footer="true"></div> 
      </article>
      </>
  )
}

export default ContactReel;