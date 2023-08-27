// Posts.jsx
import React from 'react';
import Post from './Post';

export default function Posts({ posts }) {
  return (
      <div className='col-9 col-md-9'>
        <div className='posts'>
        <div className='row '>
          {posts.map((p) => (
            <Post key={p._id} post={p} />
          ))}
        </div>
        </div>
      </div>

  );
}
