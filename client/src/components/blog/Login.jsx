import React from 'react'
import Header from '../temps/Header'
function Login() {
  return (
    <div>
 
        <div className='wrapper row'>
              <Header />
              <div className='login'>
                <div className="col-sm-12">
                  <form action="" method="post">
                  <h5><strong>LOGIN</strong></h5>               
                    <input className="form-control" type="text" name="username" value="" placeholder="Enter username" />
                    <input className="form-control" type="password" name="password" value="" placeholder="Enter password" />
                    <button className='form-control'>Login</button>
                  </form>
              </div>
              </div>
        </div>
    </div>
  )
}

export default Login