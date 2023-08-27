import 'bootstrap/dist/css/bootstrap.css';
import './app.css'
import {Route, Routes } from 'react-router-dom';
import Home from "./blog/Home"
import Login from "./blog/Login"
import Register from "./blog/Register"
import Layout from "./blog/Layout"
import Contact from "./blog/Contact"
import About from "./blog/About"
import Write from "./blog/Write"
import SinglePost from './blog/SinglePost';
import {UserContextProvider} from "./temps/UserContext"
import { useContext } from 'react';
import { Context } from '../context/Context';

// import Logout from "./blog/Logout"


function App() {
  const { user } = useContext(Context);
  return (
      <UserContextProvider>
        <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {user && (
          <>
          <Route path="/write" element={<Write />} />
          <Route path="/post/:id" element={<SinglePost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          </>
        )}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
      </UserContextProvider>
 
  );
}

export default App;