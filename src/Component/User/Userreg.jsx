import React from 'react'
import "./Userreg.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Userreg = () => {
    const navigate=useNavigate()
    const [user,setUser]=useState({
        fname:'',
        lname:'',
        username:'',
        email:'',
        password:'',
        address:'',
        mob:''
    })
  
    const onHandleChange=async(e)=>{
      setUser((pre)=>{
      
    
          return {...pre,[e.target.name]:e.target.value}
      })
    }
  
    const onHandleClick=async(e)=>{
      e.preventDefault();
      try {
      
        const ress=await axios.post("http://localhost:6001/api/userreg",{...user})
        if(ress.status==201)
        {
          alert("Registered Successfully") 
          navigate('/userlogin')
        }
        
        } catch (error) {
            console.log(error);
        }
      }  
  return (
    <div class="form_wrapper">
  <div class="form_container">
    <div class="title_container">
      <h2>User Registration Form</h2>
    </div>
    <div class="row clearfix">
      <div class="">
        <form onSubmit={onHandleClick}>
        <div class="row clearfix">
            <div class="col_half">
            <div class="input_field"> 
            <input type="text" className='username'  placeholder="First Name"  onChange={onHandleChange} name='fname' value={user.fname} />
          </div>
            </div>
            <div class="col_half">
            <div class="input_field"> 
            <input type="text" className='username' placeholder="Last Name" onChange={onHandleChange} name='lname' value={user.lname} />
          </div>
            </div>
          </div>
        <div class="input_field"> 
            <input type="text"  placeholder="Username" className='username'  onChange={onHandleChange} name='username' value={user.username}/>
          </div>
          <div class="input_field"> 
            <input type="email"  placeholder="Email"  onChange={onHandleChange} name='email' value={user.email} />
          </div>
          <div class="input_field"> 
            <input type="password"  placeholder="Password" className='username' onChange={onHandleChange} name='password' value={user.password} />
          </div>
          <div class="input_field"> 
            <input type="text"  placeholder="Address" className='username' onChange={onHandleChange} name='address' value={user.address} />
          </div>
          <div class="input_field"> 
            <input type="text"  placeholder="Mob Number" className='username' onChange={onHandleChange} name='mob' value={user.mob} />
          </div>
          
          
            	
              
            
        <input class="button" type="submit" value="Register"/>
        </form>
      </div>
    </div>
  </div>
</div>
  )
}

export default Userreg