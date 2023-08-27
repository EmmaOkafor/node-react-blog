import React, { useContext, useRef } from 'react'
import { Context } from '../../context/Context';
import axios from 'axios';
function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type: "LOGIN_START"});
    try {
      const res = await axios.post("/auth/login", {
        username:userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data})
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  

  return (
    <div className='wrapper'>
        <div className=' row'>
              <div className='login'>
                <div className="col-sm-12">
                  <form onSubmit={handleSubmit} method="post">
                  <h5><strong>LOGIN</strong></h5>               
                    <input 
                      className="form-control" 
                      type="text" 
                      placeholder="Enter username" 
                      ref={userRef}
                      />
                    <input 
                      className="form-control" 
                      type="password" 
                      placeholder="Enter password" 
                      ref={passwordRef}
                      
                      />
                    <button type='submit' className='form-control loginButton' disabled={isFetching}>Login</button>
                  </form>
              </div>
              </div>
        </div>
    </div>
  )
}

export default Login