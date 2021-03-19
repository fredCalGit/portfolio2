import React from 'react';

const Features = () => {
  return (
    <section className="section-features">
      <div className="row">
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="fas fa-tachometer-alt fa-3x feature-box__icon"></i>
            <h3 className="heading-tertiary u-margin-bottom-medium">Fast</h3>
            <p className="feature-box__text">
              Fast load times on a safe and stable environment, provide to your
              users the best experience.
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="fas fa-mobile-alt fa-3x feature-box__icon"></i>
            <h3 className="heading-tertiary u-margin-bottom-medium">
              Responsive
            </h3>
            <p className="feature-box__text">
              My layouts will look perfect on any device, regardless of screen
              size.
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="far fa-lightbulb fa-3x feature-box__icon"></i>
            <h3 className="heading-tertiary u-margin-bottom-medium">
              Intuitive
            </h3>
            <p className="feature-box__text">
              Easy to use, intuitive UX/UI out of the box.
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="fas fa-rocket fa-3x feature-box__icon"></i>
            <h3 className="heading-tertiary u-margin-bottom-medium">Dynamic</h3>
            <p className="feature-box__text">
              Give websites a life. Let's take the user experience to a higher
              level.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
