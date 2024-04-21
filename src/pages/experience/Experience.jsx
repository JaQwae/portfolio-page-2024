import { useState } from "react";
import {data} from "../../data/portfolioData.js"
import ProjectList from "./ProjectList";
import "./Experience.css"

const Experience = () => {
    window.scrollTo({
        top: 0,
        behavior: 'instant'
    });

    const projectData = {
        projects: data,
    }

    console.log(projectData)

    const [projects, setProjects] = useState(projectData.projects);

    // filter button functionality
    const handleButtonClick = (e) => {
        if(e.target.value === 'all') {
            setProjects(projectData.projects);
            // console.log(projects)
        } else {
            setProjects(projectData.projects.filter(projects => projects.category === e.target.value));
            // console.log(projects)
        }
    }
    
    const map = new Map(Object.entries(projects));

    return (
        <div id ="portfolio-page" className='pages'>
            <h1 className="page-title">Portfolio</h1>
            <ProjectList projects = {projects} handleButtonClick={handleButtonClick} />
        </div>
    )
};

export default Experience;