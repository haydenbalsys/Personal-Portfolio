import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactPage.css';

const ContactPage = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then((result) => {
        console.log(result.text);
        console.log("Message sent successfully!");
        setSubmitted(true); // Set the submitted state to true
        resetForm(); // Clear the form fields
        setTimeout(() => {
          setSubmitted(false); // Clear the "submitted successfully" message after a few seconds
        }, 3000); // Adjust the duration (in milliseconds) as needed
      })
      .catch((error) => {
        console.error(error.text);
      });
  };

  const resetForm = () => {
    // Reset the form fields to their initial state
    form.current.reset();
  };

  return (
    <div className='main'>
      <h1>Contact me!</h1>
      <p className='text'>
        Ask me anything and I'll write back as soon as possible. Thanks!
      </p>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-row">
          <div className="form-field">
            <label>Name:</label>
            <input type="text" name="user_name" required />
          </div>
          <div className="form-field">
            <label>Email:</label>
            <input type="email" name="user_email" required />
          </div>
        </div>
        <div className="form-field">
          <label>Message:</label>
          <textarea name="message" rows="5" required />
        </div>
        <div className="form-field">
          <input type="submit" value="Send" />
        </div>
      </form>
      {submitted && (
        <div className='success-message'>
          Submitted successfully!
        </div>
      )}
    </div>
  );
};

export default ContactPage;
