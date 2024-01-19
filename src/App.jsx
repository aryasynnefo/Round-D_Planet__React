import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'

import Topnav from './Component/Topnav/Topnav'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'
import Login from './Component/Admin/Login'
import Register from './Component/Admin/Register'
import Addprod from './Component/Admin/Addprod'
import Userlogin from './Component/User/Userlogin'
import Userreg from './Component/User/Userreg'
import Packagesub from './Component/Packagesub/Packagesub'
// import Pdetails from './Component/Pdetails/Pdetails'
import Footer from './Component/Footer/Footer'
import About from './Component/About/About'
import Package from './Component/Packages/Package'
import Gallery from './Component/Gallery/Gallery'
import Contact from './Component/Contact/Contact'


function App() {
 

  return (
    <>
      <Topnav/>  
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/adminlogin' Component={Login}/>
          <Route path='/adminreg' Component={Register}/>
          <Route path='/prod' Component={Addprod}/>
          <Route path='/userlogin' Component={Userlogin}/>
          <Route path='/userreg' Component={Userreg}/>
          <Route path='/packagesub/:id' Component={Packagesub}/>
          {/* <Route path='/details' Component={Pdetails}/> */}
          <Route path='/abt' Component={About}/>
          <Route path='/pkgs' Component={Package}/>
          <Route path='/gallery' Component={Gallery}/>
          <Route path='/contact' Component={Contact}/>






          
          
        </Routes>
      <Footer/>

      </BrowserRouter>
      
    </>
  )
}

export default App
