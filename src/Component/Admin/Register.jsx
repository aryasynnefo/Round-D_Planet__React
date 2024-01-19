import React from 'react'
import { useState } from 'react'
import "./Register.scss"
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Register = () => {
  const navigate=useNavigate();
  const [data,setData]=useState({
    username:'',
    email:'',
    password:'',
    fname:'',
    lname:''
  })
  const onHandleChange = async (e) => {
    setData((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };
  const onHandleSelect = (e) => {
    setData((pre) => {
      return { ...pre, country: e.target.value };
    });
  };
  const onHandleSubmit = async (e) => {
    e.preventDefault();

    try {
      const ress = await axios.post("http://localhost:6001/api/adminreg", {
        ...data,
      });
      if (ress.status == 201) {
        alert("Registered Successfully");
        navigate("/adminlogin");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
        
        <div class="form_wrapper">
  <div class="form_container">
    <div class="title_container">
      <h2>Admin Registration Form</h2>
    </div>
    <div class="row clearfix">
      <div class="">
        <form onSubmit={onHandleSubmit}>
        <div class="input_field"> 
            <input type="text"  placeholder="Username" className='username' name='username' value={data.username} required  onChange={onHandleChange}/>
          </div>
          <div class="input_field"> 
            <input type="email"  placeholder="Email"  name='email' value={data.email} required onChange={onHandleChange}/>
          </div>
          <div class="input_field"> 
            <input type="password"  placeholder="Password" className='username' name='password' value={data.password} required  onChange={onHandleChange}/>
          </div>
          
          <div class="row clearfix">
            <div class="col_half">
            <div class="input_field"> 
            <input type="text" className='username'  placeholder="First Name"  name='fname' value={data.fname}required  onChange={onHandleChange}/>
          </div>
            </div>
            <div class="col_half">
            <div class="input_field"> 
            <input type="text" className='username' placeholder="Last Name" name='lname' value={data.lname} required  onChange={onHandleChange}/>
          </div>
            </div>
          </div>
            	
              
            
          <input class="button" type="submit" value="Register"/>
        </form>
      </div>
    </div>
  </div>
</div>
        
  )
}

export default Register