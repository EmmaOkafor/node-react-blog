import 'bootstrap/dist/css/bootstrap.css';
import './app.css'
import {Route, Routes } from 'react-router-dom';
import Home from "./blog/Home"
import Login from "./blog/Login"
import Register from "./blog/Register"
// import Layout from "./temps/Layout"
import Contact from "./blog/Contact"
import About from "./blog/About"
import Write from "./blog/Write"
import SinglePost from './blog/SinglePost';
// import {UserContextProvider} from "./temps/UserContext"

// import Logout from "./blog/Logout"


function App() {
  return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/write" element={<Write />} />
        <Route path="/post/:id" element={<SinglePost />} />
    </Routes>
 
  );
}

export default App;