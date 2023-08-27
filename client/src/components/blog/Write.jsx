import React from 'react'
import Banner from '../temps/Banner'
import SideBar from '../temps/SideBar'

export default function Write() {
  return (
    <div className='wrapper'>
      <Banner img="images/bg.jpg" />
      <div className="row">
        <div className='col-md-9'>
          <form className='write'>
            <div>
              <input type='text' className='form-control' placeholder='title' value={''} />
              <input type='text' className='form-control' placeholder='description' value={''}/>
              <input type='file' className='form-control' value={''}/>
              <button className='btn form-control'>Upload Post</button>
            </div>
          </form>
        </div>
        
            <SideBar />
        </div>
    </div>
  )
}


