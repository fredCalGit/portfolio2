import React from 'react';

const Popup = ({ img1, img2, heading, subheading, content }) => {
  return (
    <div class="popup" id="popup">
      <div class="popup__content">
        <div class="popup__left">
          <img src={img1} alt="Image1" className="popup__img" />
          <img src={img2} alt="Image2" className="popup__img" />
        </div>
        <div class="popup__right">
          <a href="#section-tours" class="popup__close">
            &times;
          </a>
          <h2 className="heading-secondary u-margin-bottom-small">{heading}</h2>
          <h3 className="heading-tertiary u-margin-bottom-small">
            {subheading}
          </h3>
          <p className="popup__text">{content}</p>
          <a href="#" class="btn btn--green">
            Book now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;
