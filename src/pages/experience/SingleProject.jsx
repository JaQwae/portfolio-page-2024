import React from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import "./SingleProject.css"

export default function SingleProject(props) {
    const [isHovering, setIsHovering] = useState(false);

    function handleMouseEnter() {
        setIsHovering(true);
    }

    function handleMouseLeave() {
        setIsHovering(false);
    }

    return (
        <button
            className="single-project"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleMouseEnter}
            onBlur={handleMouseLeave}
        >
            {/* single project view when mouse is not over the element */}
            <div
                className={`"non-hover-project-state" ${!isHovering ? '' : 'hidden-project-state'
                    }`}
            >
                <h4 className="project-title">{props.project.title}</h4>
                <img src={`${props.project.image}`} alt={`${props.project.altText}`} className="project-images"></img>
            </div>
            {/* single project view when mouse is over the element */}
            <div
                className={`hover-project-state ${isHovering ? '' : 'hidden-project-state'
                    }`}
            >
                <a
                    href={`${props.project.deployedLink}`}
                    className={`icon-link ${props.project.deployedLink ? '' : 'hidden-project-state'
                        }`}
                    target="_blank"
                    rel="noreferrer noopener"

                >
                    <i className="fa-regular fa-circle-play project-icons"></i>
                </a>
                <a
                    href={`${props.project.gitHubLink}`}
                    className={`icon-link ${props.project.gitHubLink ? '' : 'hidden-project-state'
                        }`}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <i className="fa-brands fa-github project-icons"></i>
                </a>
                <img src={`${props.project.image}`} alt={`${props.project.altText}`} className="project-images project-images-hover"></img>
                <div className="image-overlay"></div>
            </div>
        </button>
    )
}

SingleProject.propTypes = {
    project: PropTypes.array.isRequired
};