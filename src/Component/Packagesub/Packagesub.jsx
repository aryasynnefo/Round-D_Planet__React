import React, { useState ,useEffect} from 'react'
import "./Packagesub.scss"
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { FaCar } from "react-icons/fa";
import { MdOutlineRestaurant } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
const Packagesub = () => {
  const { id } = useParams();
  const [pkgs,setPkgs]=useState([])
  const [user, setUser] = useState("");
  const usertoken = localStorage.getItem("usertoken");
 

    const packageSub = async () => {
        try {
          const response = await axios.get(
            `http://localhost:6001/api/pkgsub/${id}`,
            {
              headers: { Authorization: `Bearer ${usertoken}` },
            }
          );
          setPkgs(response.data.data);
          setUser(response.data.username);
        } catch (error) {
          console.error("Error fetching product details", error);
        }
      };


      useEffect(() => {
        packageSub();
      }, []);
  return (
    <div>
        <div>
        <img src="/images/slide-02.jpg" alt="" className="about" />
        <h4 className="inner-contents">{pkgs.place_name}</h4>
      </div>
       
        <div className="pkgindividual">
        <div className='carddiv'>
        <div>
        <Link to='/details'>
        <img src={pkgs.image} alt="no image" className="card-img-top" />
        <div className="card-body">
          <h1 className="card-text">{pkgs.place_name}</h1>
          <div className='icns'>
          <FaCar className='car' />  <MdOutlineRestaurant className='car'/> <FaEye className='car'/> <FaBed className='car'/>
        </div>
        <div className='pbutton'>
            
            <button className='pbtn'>{pkgs.days} Days,{pkgs.nights} Nights</button>  <button className='pbtn'>Contact for best deal</button> 
        </div>
          </div>
        </Link>

      </div>
    
        </div>
    </div>
    </div>
  )
}

export default Packagesub