import React, { useState } from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(false)
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (error) {
      setError(true)
    }
    
  };
  return (
    <div className='wrapper'>
          <div className='row '>
            <div className='register'>
              <form onSubmit={handleSubmit} method="post">
                <h5><strong>SIGNUP</strong></h5>
                  <div className="">
                    <div className="col-sm-12">
                      <input 
                        className="form-control" 
                        type="text" 
                        value={username} placeholder="Username" 
                        onChange={e => setUsername(e.target.value)}
                        />
                      <input 
                        className="form-control" 
                        type="text" 
                        // value="" 
                        placeholder="Email" 
                        onChange={e => setEmail(e.target.value)}
                        />
                      <input 
                        className="form-control" 
                        type="password" 
                        value={password}
                        placeholder="password" 
                        onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                  </div>
                  <button type="submit" className='form-control'>Register</button>
              </form>
                <button className='btn'><Link className='link' to={"/login"}>Login</Link></button>
                  {error && <span style={{color: "red"}}>Something went wrong</span>}
            </div>
        </div>
    </div>
  )
}

export default Register