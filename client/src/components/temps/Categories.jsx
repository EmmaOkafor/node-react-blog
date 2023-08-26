// Categories.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Categories({ categories }) {
  return (
    <div className='row left'>
      {categories.map((category) => (
        <div key={category._id} className='col-md-6 padding-10'>
        <Link to={`/?cat=${category.name}`}>
          {category.name}
        </Link>
        </div>
      ))}
    </div>
  );
}

