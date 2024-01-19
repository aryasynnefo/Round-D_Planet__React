import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
    const navigate=useNavigate();
    const [admin,setAdmin]=useState({
        username:'',
        password:''
    })
    const loginChange=async(e)=>{
        setAdmin((pre)=>{
            return {...pre,[e.target.name]:e.target.value}
        })
    }
    const adminLogin=async(e)=>{
        e.prventDefault();
        try {
            const ress=await axios.post("http://localhost:6001/api/adminlogin",{...admin})
            if (ress.status == 200) {
                let admintoken = ress.data.token;
        
                localStorage.setItem("token", JSON.stringify({ admintoken }));
                alert("Successfully loggedin");
                navigate("/");
              }
        } catch (error) {
            
        }
    }
  
    return (
        <div class="container ad">
        <div class="row">
            <div class="col-lg-3 col-md-2"></div>
            <div class="col-lg-6 col-md-8 login-box">
                <div class="col-lg-12 login-key">
                    <i class="fa fa-key" aria-hidden="true"></i>
                </div>
                <div class="col-lg-12 login-title">
                    ADMIN PANEL
                </div>

                <div class="col-lg-12 login-form">
                    <div class="col-lg-12 login-form">
                        <form onSubmit={adminLogin}>
                            <div class="form-group">
                                <label class="form-control-label">USERNAME</label>
                                <input type="text" class="form-control" onChange={loginChange} name='username' value={admin.username}/>
                            </div>
                            <div class="form-group">
                                <label class="form-control-label">PASSWORD</label>
                                <input type="password" class="form-control" onChange={loginChange} name='password' value={admin.password}/>
                            </div>

                            <div class="col-lg-12 loginbttm">
                                <div class="col-lg-6 login-btm login-text">
                                    {/* <!-- Error Message --> */}
                                </div>
                                <div class="col-lg-6 login-btm login-button">
                                    <Link to="/"><button type="submit" class="btn btn-outline-primary">LOGIN</button></Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-3 col-md-2"></div>
            </div>
        </div>





    </div>
  )
}

export default Login