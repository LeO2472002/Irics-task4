import React from 'react';

function LinkList({ links }) {
  return (
    <div style={{  }} >
      <h2>Link List</h2>
      <ul>
        {links.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </div>
  );
}

export default LinkList;

