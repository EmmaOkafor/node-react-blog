// import React from 'react'
// import Post from "./Post"
// export default function Posts({posts}) {
//   return (
//     <div className='posts'>
//         {posts.map((p) => (
//         <Post 
//           title={posts.title}
//           photo={posts.photo}
//         /> 
//         )
//         )}
//     </div>
//   );
// }


// Posts.jsx
import React from 'react';
import Post from './Post';

export default function Posts({ posts }) {
  return (
    <div className='posts'>
      {posts.map((p) => (
        <Post key={p._id} post={p} />
      ))}
    </div>
  );
}
