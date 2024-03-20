import React, { useState } from 'react';
import './Form.css'; // Import your CSS file for styling
import Dashboard from './Dashboard';

const Form = ({ onSubmit }) => {
  const [academyDetails, setAcademyDetails] = useState({
    name: '',
    place: '',
    courses: '',
    url: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAcademyDetails({ ...academyDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(academyDetails);
    // Clear form fields
    setAcademyDetails({
      name: '',
      place: '',
      courses: '',
      url: ''
    });
  };

  return (
    <div className='helloo'>
    <Dashboard/>
    <p>Add Academy</p>
    <div className="form-container">
      <form onSubmit={handleSubmit} className="academy-form">
      
        <input
          type="text"
          name="name"
          placeholder="Academy Name"
          value={academyDetails.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Academy Email"
          value={academyDetails.url}
          onChange={handleChange}
        />
        <input
          type="text"
          name="place"
          placeholder="Location"
          value={academyDetails.place}
          onChange={handleChange}
        />
        <input
          type="text"
          name="courses"
          placeholder="Courses Offered"
          value={academyDetails.courses}
          onChange={handleChange}
        />
        <input
          type="text"
          name="timings"
          placeholder="Class Timings"
          value={academyDetails.courses}
          onChange={handleChange}
        />
        <input
          type="url"
          name="url"
          placeholder="Academy image URL"
          value={academyDetails.url}
          onChange={handleChange}
        />
        <div className="button-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Form;
