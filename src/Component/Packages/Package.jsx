import React from "react";
import { Link } from "react-router-dom";
import "./Package.scss"
import { useState, useEffect } from "react";
import axios from "axios";
const Package = () => {
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
      <div>
        <img src="/images/slide-02.jpg" alt="" className="about" />
        <h4 className="inner-contents">Packages</h4>
      </div>

      <div className="travel"></div>

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
    </div>
  );
};

export default Package;
