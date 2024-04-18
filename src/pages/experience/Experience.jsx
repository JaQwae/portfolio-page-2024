import { useState } from "react";
import {data} from "../../data/portfolioData.js"
import ProjectList from "./ProjectList";

const Experience = () => {

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
        <div id ="portfolio-page" className='page'>
            <h1 className="page-title">Portfolio Page</h1>
            <ProjectList projects = {projects} handleButtonClick={handleButtonClick} />
        </div>
    )
};

export default Experience;