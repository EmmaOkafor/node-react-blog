import React from 'react'

function Banner(props) {
  return (
    <div className="row">
          <div className="col header-img">
            <img src={props.img} alt="header" />
          </div>
    </div>
  )
}

export default Banner;