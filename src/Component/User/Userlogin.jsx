import React from 'react'
import "./Userlogin.css"
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Userlogin = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const onHandleChange = async (e) => {
    setLogin((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  const userClick = async (e) => {
    e.preventDefault();

    try {
      const ress = await axios.post("http://localhost:6001/api/userlogin", {
        ...login,
      });

      if (ress.status == 200) {
        let { usertoken } = ress.data;

        localStorage.setItem("usertoken", usertoken);
        alert("Successfully loggedin");
        // localStorage.setItem("teken",JSON.stringify(token));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='userreg'>
         <div class="container ulg">
      
      <div class="form-container sign-in-container">
        <form action="#" onSubmit={userClick}>
          <h1>Sign in</h1>
          
          
          <input type="text" placeholder="Username" name='username' value={login.username} onChange={onHandleChange}/>
          <input type="password" placeholder="Password" name='password' value={login.password} onChange={onHandleChange} />
         
          <button>Sign In</button>
        </form>
      </div>

      {/* <!-- the overlay --> */}
      <div class="overlay-panel overlay-left">
        <h1>Welcome Back!</h1>
        <p>To keep connected with us please login with your personal info</p>
        <button class="ghost" id="signIn">Sign In</button>
      </div>
      <div class="overlay-panel overlay-right">
        <h1>Hello, Friend!</h1>
        <p>Enter your personal details and start journey with us</p>
       <Link to='/userreg'> <button class="ghost" id="signUp">Sign Up</button></Link>
      </div>
    </div> 
</div>
    
  )
}

export default Userlogin