import React from 'react'
import "./Contact.scss"
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
        <div>
        <img src="/images/slide-02.jpg" alt="" className="about" />
        <h4 className="inner-contents">Contact Us</h4>
      </div>


      <div className='container row'>
      <div className='col-mg-4 cphn'>
            <FaPhoneAlt className='myphone' />
      </div>
      </div>
    </div>
  )
}

export default Contact