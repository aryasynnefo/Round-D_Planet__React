import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { PiUsersThree } from "react-icons/pi";
import { PiMedalThin } from "react-icons/pi";
import { Ri24HoursFill } from "react-icons/ri";
import { FaBusinessTime } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import './Home.scss'
const Home = () => {
  const [item, setItem] = useState([]);
  const displayPkg = async () => {
    const res = await axios.get("http://localhost:6001/api/display");
    const data = res.data;
    if (res.status === 404 || !data) {
      console.log("error");
    } else {
      setItem(data);
    }
  };

  useEffect(() => {
    displayPkg();
  }, []);
  
  return (
    <div>
        
       <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./images/banner-01.jpg" className="d-block w-100" alt="..."/>
      <p className='inner-contents'>Experience Lives Around The Globe</p>
    </div>
    <div className="carousel-item ">
      <img src="./images/slide-02.jpg" className="d-block w-100" alt="..."/>
      <p className='inner-contents'>Experience Lives Around The Globe</p>

</div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
    {/* <span className="visually-hidden">Next</span> */}
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
    {/* <span className="visually-hidden">Previos</span> */}
  </button>
</div>
{/* --------mouse------- */}
<div className='mouse'>
  <img src="./images/mouse.png" alt="" />
</div>

{/* -------Packages---------- */}
  
    <div className='travel'>  
    <p className='tp'>Choose Your Package</p>
    </div>

    <div className=" crd">
        {item.map((d) => {
          
            return (
              <>
                <Link to={`/packagesub/${d._id}`}>
                  <div className="card">
                    <img src={d.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-text">{d.place_name}</p>
                     
                    </div>
                  </div>
                </Link>
              </>
            );
          
        })}
      </div>


      <div className='container-fluid blue'>
        <table className='table table-borderless' >
        <thead >
    <tr >
      <th scope="col" className='detailtext'><PiUsersThree className='happyhead'/>  5000+ <br />Happy Customers</th>
      <th scope="col" className='detailtext'><PiMedalThin className='happyhead'/>Best Price <br />In Industry</th>
      <th scope="col" className='detailtext'><Ri24HoursFill  className='happyhead'/>24x7 <br />Customer Service</th>
      <th scope="col" className='detailtext'><FaBusinessTime  className='happyhead'/>Hassle Free <br />Bookings</th>
    </tr>
  </thead>
        </table>
 
</div>



<div className='roundt'>
  <div className='text-container'>
    <div  className='discover'>
      <h2>Discover RountD'<br />Planet Tours and Travels</h2>
      <p className='tourspara'>Welcome to RountD’ Planet Tours and Travels, your passport to a world of extraordinary adventures and unforgettable journeys. With a passion for exploration and a commitment to providing exceptional travel experiences. At RountD’ Planet, we understand that travel is not just about reaching a destination; it’s about discovering the world, embracing diverse cultures, and creating cherished memories.</p>
      <p className='tourspara'>Our dedicated team of travel experts is here to turn your wanderlust dreams into reality. Whether you’re seeking a tropical paradise, a historical odyssey, or an off-the-beaten-path adventure, we’ve got you covered. Join us on a journey of discovery, and let RountD’ Planet Tours and Travels be your guide to the world’s most incredible destinations. Your adventure awaits!</p>
      <Link to="/abt"><button className='readmore'>Read More</button></Link>
    </div>
    <div className='image-container'>
      <img src="/images/about-image.jpg" alt="" />
    </div>
    
  </div>
  

</div>


<div className='testimonials'>
  <h2>Testimonials: Hear What <br />
Our Delighted Travelers Have to Say
</h2>
<div className=' cardsss' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
  <div className="container card ">
    <div className="card-body">
      <p className="card-text paraaaaa" ><FaStar className='rate1' /><FaStar className='rate1' /><FaStar className='rate1' /><FaStar className='rate1' /><FaStar className='rate1' /> <br />
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque nemo, fugit illo quis explicabo architecto cumque? Non at qui numquam ex quos vel, totam recusandae temporibus. Debitis quas in quasi.</p>
<hr />
    <div className='carcard'>
      <img src="/images/test1.jpg" alt="" />
    <div className="card-text samuel">Samuel <br />Kerala</div>

    </div>
    </div>
  </div>

  <div className="container card">
    <div className="card-body">
      <p className="card-text paraaaaa" ><FaStar className='rate1' /><FaStar className='rate1' /><FaStar className='rate1' /><FaStar className='rate1' /><FaStar className='rate1' /> <br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque nemo, fugit illo quis explicabo architecto cumque? Non at qui numquam ex quos vel, totam recusandae temporibus. Debitis quas in quasi.</p>
     <hr />
    <div className='carcard'>
      <img src="/images/test1.jpg" alt="" />
    <div className="card-text samuel">Jane Doe <br />Kerala</div>

    </div>
    </div>
  </div>

  <div className="container card">
    <div className="card-body">
      <p className="card-text paraaaaa" ><FaStar className='rate1' /><FaStar className='rate1' /><FaStar className='rate1' /><FaStar className='rate1' /><FaStar className='rate1' /> <br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque nemo, fugit illo quis explicabo architecto cumque? Non at qui numquam ex quos vel, totam recusandae temporibus. Debitis quas in quasi.</p>
     <hr />
    <div className='carcard'>
      <img src="/images/test1.jpg" alt="" />
    <div className="card-text samuel">Jake <br />Chennai</div>

    </div>
    </div>
  </div>
</div>

</div>

{/* <div className='row-container'>
  <div>
    <form className="validate-form inquiry">
      <h5>Quick Inquiry</h5>
      <div>
        <div className="input-holder">
          <input type="string" placeholder="Your Name" className="validate" required />
        </div>
        <div className="input-holder">
          <input type="email" placeholder="Your Email" className="validate" required />
        </div>
        <div className="input-holder">
          <textarea className="validate" placeholder='Message'></textarea>
        </div>
      </div>
      <div className='btttt'>
        <button className="submitbttaa">Submit</button>
      </div>
    </form>
  </div>

  <div className='Exciting'>
    <h2>Exciting News <br />and Upcoming Events</h2>
  </div>
</div> */}


    </div>
  )
}

export default Home