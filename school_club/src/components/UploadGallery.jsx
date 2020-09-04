import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

import {postRequest, getRequest} from '../config/axios.config'

import "../css/CreateNews.css";

function UploadGallery() {

  const [ image, setImage ] = useState();

  const UploadGallery = () => {
    const uploadData = new FormData();
    uploadData.append('image', image, image.name);
    
    fetch('http://127.0.0.1:8000/upload-gallery/', {
      method: 'POST',
      body: uploadData
    })
    .then( res => console.log(res))
    .catch(error => console.log(error))
  }

  return (
    <div className="UploadGallery">
      <header className="text-lg text-cursive text-red text-left mt-5">
          Gallery
        </header>
    
        <form className="col-xl-6 col-lg-7 col-md-8 col-sm-9 col-10 pr-0 pt-2 pb-0 px-0 pt-sm-4 pb-sm-4 px-sm-4">
          <div className=" col-12 col-xl-8 col-lg-8 col-md-12 col-sm-12 pb-3">
      <label>
        Select Image
        <input type="file" onChange={(evt) => setImage(evt.target.files[0])}/>
      </label>
      </div>
      
      <Link to="/panel/upload-gallery"><button className="btn btn-dark" onClick={() => UploadGallery()}>Upload</button></Link>
      </form>
      </div>
    
  );
}

export default UploadGallery;