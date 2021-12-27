import React from 'react';
import './about.css';
import Kak from './img002.jpg';


function About() {
    return (
        <div>
            <center>
        <img src={Kak} height="506px" width="329px"/> 
       
          <h1 className='basicheader'>Hi! I'm Ruben.</h1>
            <ul className='basictext'>
               Welcome to my website! I'm a student currently enrolled in the first year of the master of science in engineering at Ghent 
               University. On this site you can check out past projects I made. You can also check out my socials or send me an email 
               if you're interested in collaborating, or just want to inquire about something. 

            </ul>
            <ul className='basictext'>
                skills:
                Autocad, Rhino, Sketchup, Revit, Adobe Photoshop, Adobe Illustrator, Microsoft office,...

            </ul>
            <ul className='basictext'>
                Education:
                Bachelor of Science in Engineering: Architecture -Ghent University
            </ul>
            </center>
        </div>
    )
}

export default About
