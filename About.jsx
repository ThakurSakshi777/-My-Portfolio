import React from 'react'
import "./About.css"
import Card from '../Card/Card'
import mern from "../../assets/mern.png"
import java from "../../assets/java.png"
import dsa from "../../assets/dsa.png"

function About() {
  return (
    <div id='about'>
        <div className="leftbout">
       <div className="circl-line">
        <div className="circle"></div>
        <div className="line"></div>
        <div className="circle"></div>
        <div className="line"></div>
        <div className="circle"></div>
       </div>
       <div className="aboutdetails">

        <div className="personalinfo">
          <h1> personal info</h1>
          <ul>
            <li>
              <span>NAME</span> : SAKSHI SINGH
            </li>
            <li>
              <span>AGE</span> : 21 YEAR
            </li>
            <li>
              <span>GENDER</span> : FEMALE
            </li>
            <li>
              <span>LANGUAGE KNOWN</span> : HINDI , ENGLISH
            </li>
          </ul>
        </div>

        <div className="education">
          <h1> Education</h1>
          <ul>
            <li>
              <span>DEGREE</span> : MCA
            </li>
            <li>
              <span>CGPA</span> 8.2
            </li>
          </ul>
        </div>

        <div className="skills">
          <h1> Skills</h1>
          <ul>
            <li>
              <span>LANGUAGE</span> HTML , CSS , JAVASCRIPT
            </li>
            <li>
              <span>FRAMEWORKS</span>  REACT.JS , TAILWIND CSS , BOOTSRAP
            </li>
            <li>
              <span>TOOLS</span> GIT , GITHUB
            </li>
          </ul>
        </div>

       </div>
        </div>
        <div className="rightabout">
         <Card title ="MERN STACK WEB DEVELOPER" image={mern}/>
         <Card title ="JAVA" image={java}/>
         <Card title ="DSA" image={dsa}/>

        </div>


        </div>
        
  )
}

export default About