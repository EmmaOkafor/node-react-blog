import SearchIcon from '@mui/icons-material/Search';
import Person2Icon from '@mui/icons-material/Person2';
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Social from "./Social";
export default function TopBar() {
  const isLogged = false;
  return (
    <>
        <div className="row top-bar">
          
          <div className="col-md-3 col-sm-7">
            <Social />
          </div>
          <div className="col-md-7 col-sm-7">
            <Navbar />
          </div>
          <div className="col-md-2 col-sm-2 padding-top-10">
          <div className='profile'>
      {!isLogged ?
        <ul className='nav'>
          <li className="nav-item" role="presentation">
            <Link className="nav-link rounded-5" id="contact-tab2" to="/login"  data-bs-toggle="tab" role="tab" aria-selected="false">Login</Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link className="nav-link rounded-5" id="contact-tab2" to="/register" data-bs-toggle="tab" role="tab" aria-selected="false">Signup</Link>
          </li>
        </ul> :
        <ul>
          <li><Person2Icon /></li>
          <li><SearchIcon /></li>
        
        </ul>
      } 
    </div>
          </div>

        </div>
    </>
  )
}


