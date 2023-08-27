

// Post.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Post({ post }) {
  return (
      <div className='col-md-6 col-sm-6'>
        <div className='post'>
            {post.photo && <img className='postImg' src={post.photo} alt='profile' />}
            <div className='postInfo'>
              <div className='postCats'>
                {post.categories.map((category) => (
                  <span className='postCat' key={category._id}>{category.name}</span>
                ))}
                <Link to={`/post/${post._id}`}>
                  <span className='postTitle'>{post.title}</span>
                </Link>
              </div>
                <Link to={`/post/${post._id}`}>
                  <span className='postAuthor'>{post.username}</span>
                </Link>
              <hr />
              <span className='postDate'>{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDesc">{post.desc}</p>
        </div>
      </div>
  );
}
