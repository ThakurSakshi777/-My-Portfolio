import React from 'react'
import Card from '../Card/Card'
import va from "../../assets/va.png"
import fw from "../../assets/fw.png"
import tti from "../../assets/tti.png"
import GG from "../../assets/GG.png"


import "./project.css"


function Project() {
  return (
   <div id='project'>
    <h1 id='project_heading'>1  YEAR EXPERIENCE IN PROJECTS</h1>
    <div className="slider">
        <Card title= "Ai Assistant " image={va}/>
        <Card title= " Ai  Powered Fitness " image={fw}/>
        <Card title= " Text to Image" image={tti}/>
       
        <Card title= " Glossary Guard" image={GG}/>
    </div>
   </div>
  )
}

export default Project