import React, { useState } from 'react';

import './ContactPage.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Submitting form with data: ${JSON.stringify(formData)}`);
  };

  return (
    <div className='main'>
      <h1>Contact me!</h1>
      <p className='text'>Ask me anything and I'll write back as soon as possible. Thanks!</p>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-field">
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-field">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-field">
          <label>Message:</label>
          <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required />
        </div>
        <div className="form-field">
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
