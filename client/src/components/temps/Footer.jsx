import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="">
    <div className="row margin-top-20">
        
      <div className="col-md-12 bg-black">
        <p className="padding-10 center">Copyright ⓒ All right Reserved {year}</p>
      </div>
        
    </div>
    </footer>
  );
}

export default Footer;

