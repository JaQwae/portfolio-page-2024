import React from 'react'
import profilePhoto from '../../assets/images/about-page/profilePhoto.jpg'
import tamu from '../../assets/images/about-page/texasA&mSkyline.jpg'
import ut from '../../assets/images/about-page/utSkyline.jpg'
import videographyPhoto from '../../assets/images/about-page/videographyPhoto.jpg'
import "./About.css"

const About = () => {
  window.scrollTo({
    top: 0,
    behavior: 'instant'
});

  return (
    <div id="about-page" className='pages'>
      <h1 className="page-title">About</h1>
      <div id="about-page-content-container">
        <section
          id="about-me-page-picture-container"
          className='about-page-container'
        >
          <img
            id='about-me-profile-picture'
            className="about-page-pictures"
            src={profilePhoto}
            alt="JaQwae Ellison">
          </img>
          <article
            id='about-me-introduction-container'
            className='about-me-paragraphs'
          >
            <p className='about-me-text-paragraphs'>I am a 26-year-old full-stack web developer that specializes in JavaScript, Python and C#. As the learning never stops, I am seeking roles and opportunities that will continue to challenge and expand my knowledge of programming and the tech industry at large. With strong time management skills, I am also detail oriented and a team player that can adapt to the ever-evolving trends and demands of the field.</p>
          </article>
          <hr className="about-me-page-break" />
        </section>
        <section
          id='about-me-education-container'
          className='about-page-container'
        >
          <h2 className="about-me-section-title">Education</h2>
          <h3 className="sub-section-title">Texas A&M University</h3>
          <img
            id='texasA&M-photo'
            className="about-page-pictures"
            src={tamu}
            alt="Texas A&M University">
          </img>
          <article className='about-me-paragraphs'>Growing up with a passion for healthcare, I pursued Kinesiology with a double minor in Psychology and Sports Management at Texas A&M. I graduated with my bachelor’s degree in 2020. While excelling in my academics, I balanced my time between volunteering at the hospital and competing for the university’s track and field team.</article>
          <h3 id="ut-title" className="sub-section-title">University of Texas Austin</h3>
          <img
            id='ut-photo'
            className="about-page-pictures"
            src={ut}
            alt="University of Texas Austin">
          </img>
          <article className='about-me-paragraphs'>After working in healthcare for several years throughout college and post-graduation at various hospitals and private clinics, I began to explore other avenues to improve the system and patient care. Recognizing the great potential the technology industry could have in revolutionizing medical care, I decided to take a leap of faith and shifted gears. I attended the University of Texas Web Development Bootcamp in 2022 and uncovered the endless possibilities of innovation and progression that software development could offer.</article>
          <hr className="about-me-page-break" />
        </section>
        <section
          id='about-me-passion-container'
          className='about-page-container'
        >
          <h2 className="about-me-section-title">Passion</h2>
          <h3 className="sub-section-title">Videography</h3>
          <img
            id='about-me-videography'
            className="about-page-pictures"
            src={videographyPhoto}
            alt="JaQwae Ellison">
          </img>
          <article className='about-me-paragraphs'>In my free time, I help produce news content for various local stations. I am adept in learning and operating new equipment, setting up shots and interviews, as well as shooting sports highlights. In addition I am experienced in Adobe Creative Suite.</article>
          <hr className="about-me-page-break" />
        </section>
        <section
          id='about-me-location-container'
          className='about-page-container'
        >
          <h2 className="about-me-section-title">Location</h2>
          <div id="location-content-container">
            <iframe
              title="jaqwae-ellison-location"
              className="location-map"
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d51570.07411637546!2d-115.21404808612192!3d36.1146994470192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x80c8c4383428d4eb%3A0x43e2195d0c26834c!2sLas%20Vegas%20Strip%2C%20Nevada!3m2!1d36.1147065!2d-115.17284839999999!5e0!3m2!1sen!2sus!4v1713465010534!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="location-information">
              <p>Located in: Las Vegas</p>
              <p>Open to Relocate: Yes</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About