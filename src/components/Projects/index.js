import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Projects = () => {
  return (
    <section className="section-projects">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Some of my projects</h2>
      </div>
      <Carousel
        className="row"
        centerSlidePercentage={33}
        centerMode
        showIndicators={false}
        style={{ backgroundColor: 'inherit', margin: '1rem' }}
      >
        {/* <div className="row"> */}
        <div className="col-1-of-3 m-5">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">
                  PJBrito assessoria
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>Landing Page</li>
                  <li>Smooth scroll</li>
                  <li>Built-in Emailing</li>
                  <li>Responsive Layout</li>
                  <li>Scalable Components</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__link-box">
                  <p className="card__link-only">Check it out!</p>
                </div>
                <a
                  href="http://www.pedrojorge.com.br/"
                  className="btn btn-white"
                  target="_blank"
                >
                  visit now!
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-1-of-3 m-5">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--2">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--2">
                  covid-19 tracker
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>Landing Page</li>
                  <li>API Updated</li>
                  <li>Built-in Charts</li>
                  <li>Responsive Layout</li>
                  <li>Scalable Components</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-2">
              <div className="card__cta">
                <div className="card__link-box">
                  <p className="card__link-only">Check it out!</p>
                </div>
                <a
                  href="https://covidtracker-three.vercel.app/"
                  className="btn btn-white"
                  target="_blank"
                >
                  visit now!
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3 m-5">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--3">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--3">
                  E-Commerce
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>Simple E-Commerce</li>
                  <li>Fast Built</li>
                  <li>Third Party CMS</li>
                  <li>Responsive Layout</li>
                  <li>Scalable Components</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-3">
              <div className="card__cta">
                <div className="card__link-box">
                  <p className="card__link-only">Check it out!</p>
                </div>
                <a
                  href="https://fredcalstore.vercel.app/"
                  className="btn btn-white"
                  target="_blank"
                >
                  visit now!
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </Carousel>
    </section>
  );
};

export default Projects;
