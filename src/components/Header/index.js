import React from 'react';
import logowhite from '../../images/logowhite.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-box">
        <img src={logowhite} alt="Logo" className="logo" />
      </div>

      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main"></span>
          <span className="heading-primary-sub">
            let's build something amazing
          </span>
        </h1>
        <a href="#" className="btn btn-white btn-animated">
          discover my work
        </a>
      </div>
    </header>
  );
};

export default Header;
