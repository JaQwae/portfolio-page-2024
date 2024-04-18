import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div id='home-page' className='pages'>
        <div id='main-home-page-content'>
            <section id="home-page-word-container">
                    <h1 id='home-page-greeting'>Howdy,</h1>
                    <h3 className='home-page-intro-sentence home-page-first-intro-sentence'>
                        My name is
                        <p className="home-page-first-intro-sentence my-name-on-home-page" id={`my-name-on-home-page`}>
                            JaQwae Ellison
                        </p>
                        ,
                    </h3>
                    <h3 className='home-page-intro-sentence'>a full stack web developer</h3>
                    <h6 id='home-page-tech-stack'>MERN | C# | Python</h6>
            </section>
            <section className="social-media-icon-container">
                <a href="https://www.linkedin.com/in/jaqwae-ellison/" target="_blank" rel="noreferrer noopener">
                    <i className="fa-brands fa-linkedin social-media-icons" id={`social-media-icons`}>
                        {/* Gives hover animation over links */}
                        <span></span><span></span><span></span><span></span>
                    </i>
                </a>
                <a href="https://github.com/JaQwae" target="_blank" rel="noreferrer noopener">
                    <i className="fa-brands fa-github social-media-icons" id={`social-media-icons`}>
                        {/* Gives hover animation over links */}
                        <span></span><span></span><span></span><span></span>
                    </i>
                </a>
                <a href="https://twitter.com/CodingOg" target="_blank" rel="noreferrer noopener">
                    <i className="fa-brands fa-twitter social-media-icons" id={`social-media-icons`}>
                        {/* Gives hover animation over links */}
                        <span></span><span></span><span></span><span></span>
                    </i>
                    
                </a>
            </section>
        </div>
    </div>
)
}

export default Home