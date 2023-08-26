// SideBar.jsx
import React, { useEffect, useState } from 'react';
import Categories from './Categories';
import Social from './Social';
import Ads from './Ads';
import axios from 'axios';

export default function SideBar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      try {
        const res = await axios.get("/categories");
        setCats(res.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    getCats();
  }, []);

  return (
    <div className='row side-bar'>
      <div className='col-md-12'>
        <h4>About Me</h4>
        <img src="/images/2.png" className='' alt='profile' />
        <p className="justify">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
      </div>

      <div className='col-md-12 margin-top-20'>
        <h4>Categories</h4>
        <Categories categories={cats} />
      </div>

      <div className='col-md-12 margin-top-20'>
        <Ads />
      </div>

      <div className='col-md-12 margin-top-20'>
        <h4>Follow Us</h4>
        <Social />
      </div>
    </div>
  );
}
