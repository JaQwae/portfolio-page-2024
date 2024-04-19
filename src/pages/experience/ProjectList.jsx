import React from "react";
import SingleProject from "./SingleProject";
import "./ProjectList.css"

export default function ProjectList (props) {

    return(
        <React.Fragment>
            <div className= "portfolio-buttons-container">
                <button 
                    className="portfolio-buttons" 
                    value='all' 
                    onClick={props.handleButtonClick}>
                        All
                </button>
                <button 
                    className="portfolio-buttons"
                    value='front-end' 
                    onClick={props.handleButtonClick}>
                        Front-End
                </button>
                <button 
                    className="portfolio-buttons "
                    value='back-end' 
                    onClick={props.handleButtonClick}>
                        Back-End
                </button>
                <button 
                    className="portfolio-buttons"
                    value='full-stack' 
                    onClick={props.handleButtonClick}>
                        Full-Stack
                </button>
            </div>

            <div className="project-container">
                {props.projects.map(project => {
                    return <SingleProject key={project.id} project={project}/>
                })}
            </div>
        </React.Fragment>
    )
}