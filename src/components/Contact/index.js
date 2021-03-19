import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <section className="section-contact">
      <div className="row">
        <div className="contact">
          <div className="contact__form  col-1-of-2">
            <form className="form " onSubmit={sendEmail}>
              <div className="u-margin-bottom-medium">
                <h2 className="heading-secondary">talk to me!</h2>
              </div>
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Name"
                  id="nameInput"
                  name="name"
                  required
                />
                <label className="form__label" htmlFor="nameInput">
                  Name
                </label>
              </div>
              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Email address"
                  id="emailInput"
                  required
                  name="email"
                />
                <label className="form__label" htmlFor="emailInput">
                  Email
                </label>
              </div>
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Subject"
                  id="subjectInput"
                  required
                  name="subject"
                />
                <label className="form__label" htmlFor="subjectInput">
                  Subject
                </label>
              </div>
              <div className="form__group">
                <textarea
                  type="text"
                  className="form__input"
                  placeholder="Message"
                  id="messageInput"
                  required
                  name="message"
                />
                <label className="form__label" htmlFor="messageInput">
                  Message
                </label>
              </div>

              <button
                type="Submit"
                style={{
                  border: 'none',
                  backgroundColor: '#1266f1',
                  color: '#fff',
                  fontFamily: 'inherit',
                }}
                className="btn-white"
              >
                SUBMIT
              </button>
            </form>
          </div>

          <div className="message col-1-of-2">
            <h1 className="heading-primary-2">
              <span className="heading-primary-sub-2">
                let's
                <br /> build
                <br /> something <br />
                amazing
              </span>
              <span className="heading-primary-main-2">together</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
