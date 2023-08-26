import React from 'react'
import Header from '../temps/Header'

export default function Write() {
  return (
    <div className='wrapper'>
    <Header />
      <div className='write'>
        <form>
          <div>
            <input type='text' className='form-control' placeholder='title' value={''} />
            <input type='text' className='form-control' placeholder='description' value={''}/>
            <input type='file' className='form-control' value={''}/>
            <button className='btn form-control'>Upload Post</button>
          </div>
        </form>
      </div>
    </div>
  )
}














// import React, { useState } from "react";

// // import AddIcon from '@mui/icons-material/Add';
// // import Fab from '@mui/material/Fab';
// import Zoom from '@mui/material/Zoom';
// // import { Fab } from '@mui/material';
// import Header from "../temps/Header";
// import Post from "../temps/Post";
// import Footer from "../temps/Footer";
// const today = new Date().toLocaleDateString();
// function CreateArea(props) {
//   const [note, setNote] = useState({
//     img: "",
//     title: "",
//     content: ""
//   });

//   const [isExpanded, setIsExpanded] = useState(false);
//   function handleChange(event) {
//     const { name, value } = event.target;
//     setNote((prevNote) => {
//       return {
//         ...prevNote,
//         [name]: value
//       };
//     });
//   }

//   function submitNote(event) {
//     props.onAdd(note);
//     setNote({
//       img: "",
//       title: "",
//       content: ""
//     });
//     event.preventDefault();
//   }

//   function expand(){
//     setIsExpanded(true);
//   }

//   return (
//     <div>
//       <Header />
//       <div className="wrapper">
//         <div className="row width-80 write">
//           <div className="col-12">
//           <Post 
//                 img="/images/bg.jpg"
//                 catName="Music"
//                 title="DEVELOP THE HABIT"
//                 content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur, magni distinctio velit eius earum pariatur vero. 
//                           Dolores ducimus consectetur quos et sapiente nobis voluptatum eum. Error nobis possimus perspiciatis."
//                 postDate={today}
//               />
//           </div>
//           <div className="col-md-12">
//           <form className="create-note">
//         <div> 
//               {isExpanded ? <input 
//               onChange={handleChange} 
//               name="img" 
//               type="file"  
//               value={note.img} /> : null  }
//         </div>
//         <div>
//             {isExpanded ? <input
//               onChange={handleChange}
//               name="title"
//               placeholder="Title"
//               value={note.title}
//             /> : null}
//         </div>
//         <div>
//             <textarea
//               onChange={handleChange}
//               name="content"
//               onClick ={expand}
//               placeholder="make a post..."
//               rows={isExpanded? "3" : "1"}
//               value={note.content}
//             />
//             <Zoom in ={isExpanded? true : false}>
//             <button onClick={submitNote}>Upload</button>
//             </Zoom>          
//         </div>
//     </form>
//           </div>
//         </div>
//     </div>
//     <Footer />            
//     </div>
//   );
// }

// export default CreateArea;
