// Home.jsx
import React, { useEffect, useState } from 'react';
import SideBar from '../temps/SideBar';
import Posts from './Posts';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import Banner from '../temps/Banner';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("/posts"+search);
        setPosts(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [search]);

  return (
    <div className='wrapper'>
      <div>
      <Banner 
        img="images/2.png"
      />
      </div>
      <div className='row'>
        <Posts posts={posts} />
        <SideBar />
      </div>
    </div>
  );
}

