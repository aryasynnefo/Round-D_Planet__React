import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pdetails = () => {
  const [details, setDetails] = useState([]);
  const [user, setUser] = useState("");
  const usertoken = localStorage.getItem("usertoken");

  const pDetails = async () => {
    try {
      const response = await axios.get(
        "http://localhost:6001/api/displaydetail",
        {
          headers: { Authorization: `Bearer ${usertoken}` },
        }
      );
      setDetails(response.data.data);
      setUser(response.data.username);
    } catch (error) {
      console.error("Error fetching product details", error);
    }
  };
  
  

  useEffect(() => {
    pDetails();
  }, []);

 
    return (
        <div>
          {Array.isArray(details) && details.map((detail) => (
            <div key={detail._id} className="pkgindividual">
              <div className='carddiv'>
                <div>
                  <img src={detail.image} alt="no image" className="card-img-top" />
                  <div className="card-body">
                    <h1 className="card-text">{detail.place_name}</h1>
                    <p>{detail.duration}</p>
                    <p>{detail.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
      
};

export default Pdetails;
