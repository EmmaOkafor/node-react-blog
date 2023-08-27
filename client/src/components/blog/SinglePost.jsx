// SinglePost.jsx
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Header from "../temps/Header";
import SideBar from "../temps/SideBar";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get("/posts/" + path);
        setPost(res.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    getPost();
  }, [path]);

  return (
    <div className="wrapper">
    <Header />
        <div className="singlePost">
          <div className="singlePostWrapper">
            {post.photo && (
              <img src={post.photo} alt="" className="singlePostimg" />
            )}
            <h1 className="singlePostTitle">{post.title}</h1>
            <div className="singlePostInfo">
              <span className="singlePostAuthor">
                Author:
              <Link to={`/?user=${post.username}`}>           
                <b>{post.username}</b>
              </Link>
              </span>
              <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="singlePostDesc">
              {post.desc}
            </p>
          </div>
        </div>
        <div className="side-bar">
              <SideBar />
        </div>
    </div>
  );
}
