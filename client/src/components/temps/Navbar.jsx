import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

function Navbar(){
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT"});
  };

  return(
    <div>
      <ul className="nav-bar" >
            <li className="nav-item">
            <Link className="nav-link active rounded-5" id="home-tab2" to="/" data-bs-toggle="tab" role="tab" aria-selected="true">HOME</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link rounded-5" id="profile-tab2" to="/about" data-bs-toggle="tab" role="tab" aria-selected="false">ABOUT</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link rounded-2" id="contact-tab2" to="/contact" data-bs-toggle="tab" role="tab" aria-selected="false">CONTACT</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link rounded-5" id="contact-tab2" to="/write" data-bs-toggle="tab" role="tab" aria-selected="false">WRITE</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link rounded-5" id="contact-tab2" onClick={handleLogout} to="/logout" data-bs-toggle="tab" role="tab" aria-selected="false">{ user && "LOGOUT"}</Link>
            </li>
        </ul>   
    </div>
  );
}

export default Navbar;
