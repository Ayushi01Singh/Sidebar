import React, { useState } from 'react';
import './Form.css'; // Import your CSS file
import '../pages/Inventory';
import { Link } from 'react-router-dom';



const Form = ({onSubmit}) => {
  const [formData, setFormData] = useState({
    name: '',
    prize: '',
    project: '',
    locstion: '',
    furnishing: '',
    area: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
       

  };

  return (
    
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name of property:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="prize">Prize:</label>
        <input
          type="number"
          id="prize"
          name="prize"
          value={formData.prize}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="address">Project Name:</label>
        <input
          type="text"
          id="project"
          name="project"
          value={formData.project}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="furnishing">Furnishing:</label>
        <input
          type="text"
          id="furnishing"
          name="furnishing"
          value={formData.furnishing}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="prize">Build Up Area:</label>
        <input
          type="number"
          id="area"
          name="area"
          value={formData.area}
          onChange={handleChange}
        />
      </div>
      <Link to="../Inventory">
      <button type="submit">Submit</button>
    </Link>
    </form>
  );
};

export default Form;
