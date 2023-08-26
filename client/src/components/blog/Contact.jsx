import React, { useEffect, useState} from 'react';
import SideBar from '../temps/SideBar';
import axios from "axios";
import Header from '../temps/Header';

function Contact(){
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");

      setPosts(res.data);
      console.log(res.data);
    }
    fetchPosts();
  },[]);
  return(
    <div>
        <div className="wrapper">
        <Header posts={posts} />
            <div className='row contact margin-top-50'>
                <form action="" method="post">
                <h5><strong>Contact Us</strong></h5>            
                  <div className="col-sm-12">
                    <input className="form-control" type="text" name="username" value="" placeholder="Enter username" />
                    <input className="form-control" type="email" name="username" value="" placeholder="Enter Email" />
                    <textarea rows="5" col="20" className="form-control" placeholder="Compose your message" />     
                  </div>
                <button className='form-control'>Send message</button>
                </form>
            </div>
            <SideBar/>
        </div>
    </div>
  )

}

export default Contact;
