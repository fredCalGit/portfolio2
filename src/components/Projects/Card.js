import React from 'react';

const Card = () => {
  return (
    <div className="col-1-of-3">
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
  );
};

export default Card;
