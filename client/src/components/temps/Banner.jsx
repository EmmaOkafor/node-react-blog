import React from 'react'

function Banner(props) {
  return (
    <div className="row">
          <div className="col-12 col-md-12 col-sm-12">
            <div className='header-img'>
              <img src={props.img} alt="header" />
            </div>
          </div>
    </div>
  )
}

export default Banner;