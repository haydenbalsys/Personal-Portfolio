import React, { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc } from "firebase/firestore";
import './ContactPage.css';

const ContactForm = () => {
  const defaultData = {
    name: '',
    email: '',
    message: ''
  }

  const [data, setData] = useState(defaultData);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "form-submissions"), {
        name: data.name,
        email: data.email,
        message: data.message
      });
      alert("Form submitted successfully!");
      setData(defaultData);
    } catch (error) {
      alert("Error submitting form!");
    }
  }

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
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
            <input type="text" name="name" value={data.name} onChange={handleChange} required />
          </div>
          <div className="form-field">
            <label>Email:</label>
            <input type="email" name="email" value={data.email} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-field">
          <label>Message:</label>
          <textarea name="message" rows="5" value={data.message} onChange={handleChange} required />
        </div>
        <div className="form-field">
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
