import React from 'react'
import './Topnav.scss'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";


const Topnav = () => {
  return (
    <div>
      <nav className='container-fluid'>
        {/* <div className='logo'>
        <img src="/images/logo.png" alt="" />

        </div> */}
  <ul className="navigation">
   
    <li><FaFacebookF /></li>
    <li><FaTwitter /></li>
    <li><FaLinkedinIn /></li>
    <li><FaInstagram /></li>
    <li><IoMail />:info@rounddplanet.com </li>
    <li><FaPhoneAlt />+62 8568168293</li>

    

</ul>
  {/* <div class="btn-container">
    <button class="btn-main">Sign up</button>
    
  </div> */}
</nav>
    </div>
  )
}

export default Topnav