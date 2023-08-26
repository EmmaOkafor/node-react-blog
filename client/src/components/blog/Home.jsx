// import React, { useEffect, useState} from 'react';
// import SideBar from '../temps/SideBar';
// import Header from '../temps/Header';
// import Posts from './Posts'
// import axios from "axios";

// // const today = new Date().toLocaleDateString();

// export default function Home() {
//   const [posts, setPosts] = useState([]);
//   useEffect(() => {
//     // const fetchPosts = async () => {
//     //   const res = await axios.get("http://localhost:5000/api/posts");
//     //   setPosts(res.data);
//     //   // https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid=7b8f0cd564199bb7bf7af2483b653b3b
//     //   console.log(res.data);
//     // }
    
  

//   const fetchPosts = async () => {
//     try {
//       const res = await axios.get("/posts");
//       setPosts(res.data);
//       console.log(res.data);
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//     }
//   };
//   fetchPosts();
//   },[]);
  
//   return (
//     <>
//       <div className='wrapper'>
//       <Header />
//         <div className='row home'>
//           <div className='col-9'>
//               <Posts posts = {posts.title}/>
//           </div>
//           <div className='col-3'>
//               <SideBar/>
//           </div>
//         </div>
//       </div>

//     </>
//   )
// }

// Home.jsx
import React, { useEffect, useState } from 'react';
import SideBar from '../temps/SideBar';
import Header from '../temps/Header';
import Posts from './Posts';
import axios from "axios";
import { useLocation } from 'react-router-dom';

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
      <Header />
      <div className='row home'>
        <div className='col-9'>
          <Posts posts={posts} />
        </div>
        <div className='col-3'>
          <SideBar />
        </div>
      </div>
    </div>
  );
}

// {/* <div className='row margin-top-30'>
//         <div className='col-md-9 col-sm-9'>
//           <div className='col-md-6 col-sm-6'  >
//             <div className='margin-top-30'>
//               <Posts 
//                 img="/images/bg.jpg"
//                 catName="Music"
//                 title="DEVELOP THE HABIT"
//                 content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur, magni distinctio velit eius earum pariatur vero. 
//                           Dolores ducimus consectetur quos et sapiente nobis voluptatum eum. Error nobis possimus perspiciatis."
//                 postDate={today}
//               />
//             </div>
//           </div>

//           <div className='col-md-6 col-sm-6 ' >
//             <div className='margin-top-30'>
//               <Posts 
//                 img="/images/bg.jpg"
//                 catName="Technology"
//                 title="DEVELOP THE HABIT"
//                 content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur, magni distinctio velit eius earum pariatur vero. 
//                           Dolores ducimus consectetur quos et sapiente nobis voluptatum eum. Error nobis possimus perspiciatis."
//                 postDate={today}
//               />
//             </div>
//           </div>

//           <div className='col-md-6 col-sm-6 ' >
//             <div className='margin-top-30'>
//               <Posts 
//                 img="/images/bg.jpg"
//                 catName="E-commerce"
//                 title="DEVELOP THE HABIT"
//                 content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur, magni distinctio velit eius earum pariatur vero. 
//                           Dolores ducimus consectetur quos et sapiente nobis voluptatum eum. Error nobis possimus perspiciatis."
//                 postDate={today}
//               />
//             </div>
//           </div>

//           <div className='col-md-6 col-sm-6 ' >
//             <div className='margin-top-30'>
//               <Posts 
//                 img="/images/bg.jpg"
//                 catName="Programming"
//                 title="DEVELOP THE HABIT"
//                 content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur, magni distinctio velit eius earum pariatur vero. 
//                           Dolores ducimus consectetur quos et sapiente nobis voluptatum eum. Error nobis possimus perspiciatis."
//                 postDate={today}
//              />
//             </div>
//           </div>

//           <div className='col-md-6 col-sm-6 ' >
//             <div className='margin-top-30'>
//               <Posts 
//                 img="/images/bg.jpg"
//                 catName="Learning"
//                 title="DEVELOP THE HABIT"
//                 content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur, magni distinctio velit eius earum pariatur vero. 
//                           Dolores ducimus consectetur quos et sapiente nobis voluptatum eum. Error nobis possimus perspiciatis."
//                 postDate={today}
//               />
//             </div>
//           </div>

//           <div className='col-md-6 col-sm-6 ' >
//             <div className='margin-top-30'>
//               <Posts 
//                 img="/images/bg.jpg"
//                 catName="Music"
//                 title="SING LIKE A PRO"
//                 content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur, magni distinctio velit eius earum pariatur vero. 
//                           Dolores ducimus consectetur quos et sapiente nobis voluptatum eum. Error nobis possimus perspiciatis."
//                 postDate={today}
//               />
//             </div>
//           </div>

//         </div>
//         <div className='col-md-3 col-sm-9' >
//           <SideBar />
//         </div>

//       // </div> */}
