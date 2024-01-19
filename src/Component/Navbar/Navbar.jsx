import React from 'react'
import './Navbar.scss'
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav className="nav">
  <ul>
    <li>ABOUT US</li>
    <li>PACKAGES</li>
    <li>NEWS AND EVENTS</li> 
    <li>GALLERY </li>
    <li >CONTACT US</li>
    <li><FaRegUser /></li>
    {/* <Link to='/userlogin'><li><FaRegUser /></li></Link> */}
  </ul>
</nav>


    </div>
  )
}

export default Navbar