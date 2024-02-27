// InputLinks.js

import React, { useState } from 'react';


function InputLinks({ onSubmit }) {
  const [link, setLink] = useState('');

  const handleChange = (e) => {
    setLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(link);
    setLink('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} >
        <div className="input-container">
          <input type="text" value={link} onChange={handleChange} placeholder="Enter link..." />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default InputLinks;
