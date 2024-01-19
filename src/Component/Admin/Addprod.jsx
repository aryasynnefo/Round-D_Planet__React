import { useState, useRef ,useEffect} from "react";
import React from 'react'
import "./Addprod.css"
import axios from 'axios';

const Addprod = () => {
  const [packages, setPackages] = useState({
    place_name: '',
    days: '',
    nights: '',
    image: ''
  });

  const fileInputRef = useRef(null);

  const onHandleChange = (e) => {
    setPackages((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  const onHandleClick = async (e) => {
    e.preventDefault();

    const fileInput = fileInputRef.current;

    if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
      alert("Please select an image");
      return;
    }

    const img = await convertToBase64(fileInput.files[0]);

    try {
      const ress = await axios.post("http://localhost:6001/api/addpkg", {
        ...packages,
        image: img,
      });

      if (ress.status === 201) {
        alert("Package added");
      }
    } catch (error) {
      alert("Error");
    }
  };

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = () => {
        reject(error);
      };
    });
  }
  // const load = () => {
  //   const admintoken = JSON.parse(localStorage.getItem("token"));

  //   const res = axios.get("http://localhost:6001/api/home", {
  //     headers: { Authorization: `Bearer ${admintoken.token}` },
  //   });
  // };
  // useEffect(() => {
  //   load();
  // }, []);

  return (
    <div className="container">
      <form id="contact" onSubmit={onHandleClick}>
        <h3 className='prod'>Add Package</h3>

        <fieldset>
          <input placeholder="Place Name" type="text" tabIndex="2" name='place_name' value={packages.place_name} onChange={onHandleChange} />
        </fieldset>
        <fieldset>
          <input placeholder="No: of Days" type="text" tabIndex="2" name='days' value={packages.days} onChange={onHandleChange} />
        </fieldset>
        <fieldset>
          <input placeholder="No: of Nights" type="text" tabIndex="3" name='nights' value={packages.nights} onChange={onHandleChange} />
        </fieldset>
        <fieldset>
          <div className="mb-3">
            <label className="form-label">Upload Image</label>
            <input className="form-control" type="file" id="formFile" name='image' ref={fileInputRef} />
          </div>
        </fieldset>

        <fieldset>
          <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Addprod;
