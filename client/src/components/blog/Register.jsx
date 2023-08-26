import React from 'react';
import Header from '../temps/Header';

function Register() {
  return (
    <div>
          <div className='wrapper row '>
          <Header />
            <div className='register'>
              <form className="" action="" method="post">
                <h5><strong>SIGNUP</strong></h5>
                  <div className="">
                    <div className="col-sm-12">
                      <input className="form-control" type="text" name="username" value="" placeholder="Username" />
                      <input className="form-control" type="text" name="email" value="" placeholder="Email" />
                      <input className="form-control" type="password" name="pass" value="" placeholder="password" />
                      <input className="form-control" type="password" name="conpass" value="" placeholder="confirm password" />
                    </div>
                  </div>
                  <button className='form-control'>Register</button>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Register