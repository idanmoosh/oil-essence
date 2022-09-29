import React from 'react';
import Select from 'react-select';
import { useState } from 'react';

const Contact = () => {
  const subjectOptions = [
    { value: 'Customer service', label: 'Customer Service' },
    { value: 'Fregrants service', label: 'Fregrant request/response' },
    { value: 'Membership service', label: 'Premium membership' },
  ];
  const [inputs, setInputs] = useState({});
  const [subject, setSubject] = useState('');
  const handleChange = e =>
    setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));

  const handleSelect = e => {
    setSubject(e.value);
  };

  const handleSubmit = () => {
    const submission = {
      name: inputs.fullName,
      email: inputs.email,
      subject: subject,
      details: inputs.details,
    };
    return submission;
  };
  return (
    <div className='contactSection'>
      <h2>Looking forward hearing from you</h2>
      <section className='formSection'>
        <h3>Contact form</h3>
        <form className='contactForm' onSubmit={handleSubmit}>
          <label>full name</label>
          <input
            className='input'
            name='fullName'
            type='text'
            value={inputs.fullName || ''}
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            className='input'
            name='email'
            type='text'
            data-value={inputs.email || ''}
            onChange={handleChange}
          />
          <label>Subject</label>
          <Select options={subjectOptions} onChange={handleSelect} />
          <label>Details</label>
          <textarea
            className='input'
            value={inputs.details || ''}
            name='details'
            wrap='soft'
            cols='30'
            rows='10'
            onChange={handleChange}
          />
          <input type='submit' value='Submit' className='submitButton' />
        </form>
      </section>
      <section className='companyDetails'>
        <h3>Our contacts</h3>
        <ul>
          <li>Oil Essence</li>
          <li>Idan Haim</li>
          <li>+972-506794083</li>
        </ul>
        <img className='logo' src='./media/4-2.png' alt='company logo' />
      </section>
    </div>
  );
};

export default Contact;
