import React from 'react';
import avatar from '../../images/avatar.jpg';
const About = () => {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Who is this guy?</h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <img
            src={avatar}
            alt="Profile picture"
            className="u-img-rounded avatar"
          />
          <h3 className="heading-tertiary u-margin-bottom-small">about me</h3>
          <p className="paragraph">
            I'm a Developer. Coding is my thing, I have a real passion for
            problem solving, data structure, alghorithms, UI effects and
            creating intuitive, dynamic and reliable user experiences. Let's
            make something special.
          </p>
          <a href="#" className="btn-text">
            Learn more &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <div className="composition__photo composition__photo--p1">
              <i className="fab fa-html5 fa-3x m-2"></i>
              <p>HTML</p>
            </div>
            <div className="composition__photo composition__photo--p2">
              <i className="fab fa-css3 fa-3x m-2"></i>
              <p>CSS</p>
            </div>
            <div className="composition__photo composition__photo--p3">
              <i className="fab fa-js fa-3x m-2"></i>
              <p>JavaScript</p>
            </div>
            <div className="composition__photo composition__photo--p4">
              <i className="fab fa-node-js fa-3x m-2"></i>
              <p>NodeJS</p>
            </div>

            <div className="composition__photo composition__photo--p5">
              <i className="fab fa-react fa-3x m-2"></i>
              <p>React</p>
            </div>
            <div className="composition__photo composition__photo--p6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                focusable="false"
                width="50"
                height="50"
                style={{ transform: 'rotate(360deg)', marginBottom: '1rem' }}
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 256 244"
              >
                <path
                  d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896c-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895c.326 4.887 2.28 9.122 5.212 12.054c-11.076 21.828-28.016 37.791-53.426 51.148c-17.266 9.122-35.183 12.38-53.1 10.1c-14.66-1.955-26.062-8.47-33.23-19.222c-10.424-15.963-11.401-33.23-2.605-50.496c6.19-12.38 15.962-21.502 22.152-26.063c-1.303-4.235-3.258-11.402-4.235-16.614c-47.237 34.207-42.35 80.468-28.016 102.295c10.75 16.29 32.577 26.389 56.684 26.389c6.515 0 13.03-.652 19.546-2.28c41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176c16.288 10.751 28.016 24.76 34.531 41.7c5.538 13.683 5.212 27.04-.652 38.443c-9.121 17.266-24.432 26.714-44.63 26.714c-13.031 0-25.41-3.91-31.926-6.842c-3.583 3.258-10.099 8.47-14.66 11.729c14.009 6.515 28.343 10.099 42.025 10.099c31.274 0 54.404-17.267 63.2-34.533c9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895c-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325c-13.357-22.153-18.895-46.26-16.94-72.323c1.302-19.547 7.818-36.488 19.22-50.497c9.447-12.054 27.69-17.918 40.07-18.243c34.531-.652 49.19 42.351 50.168 59.618c4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451c-14.985 41.7-5.212 81.771 13.031 113.372c-1.628 2.28-2.606 5.864-2.28 9.448z"
                  fill="currentColor"
                />
              </svg>
              <p>Redux</p>
            </div>
            <div className="composition__photo composition__photo--p7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                focusable="false"
                width="50"
                height="50"
                style={{ transform: 'rotate(360deg)', marginBottom: '1rem' }}
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <path
                  d="M0 16v16h32V0H0zm25.786-1.276a4.023 4.023 0 0 1 2.005 1.156c.292.312.729.885.766 1.026c.01.042-1.38.974-2.224 1.495c-.031.021-.156-.109-.292-.313c-.411-.599-.844-.859-1.505-.906c-.969-.063-1.594.443-1.589 1.292a1.26 1.26 0 0 0 .135.599c.214.443.615.708 1.854 1.245c2.292.984 3.271 1.635 3.88 2.557c.682 1.031.833 2.677.375 3.906c-.51 1.328-1.771 2.234-3.542 2.531c-.547.099-1.849.083-2.438-.026c-1.286-.229-2.505-.865-3.255-1.698c-.297-.323-.87-1.172-.833-1.229c.016-.021.146-.104.292-.188l1.188-.688l.922-.536l.193.286c.271.411.859.974 1.214 1.161c1.021.542 2.422.464 3.115-.156c.281-.234.438-.594.417-.958c0-.37-.047-.536-.24-.813c-.25-.354-.755-.656-2.198-1.281c-1.651-.714-2.365-1.151-3.01-1.854a4.236 4.236 0 0 1-.88-1.599c-.12-.453-.151-1.589-.057-2.042c.339-1.599 1.547-2.708 3.281-3.036c.563-.109 1.875-.068 2.427.068zm-7.51 1.339l.01 1.307h-4.167v11.839h-2.948V17.37H7.01v-1.281c0-.714.016-1.307.036-1.323c.016-.021 2.547-.031 5.62-.026l5.594.016z"
                  fill="currentColor"
                />
              </svg>
              <p>TypeScript</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
