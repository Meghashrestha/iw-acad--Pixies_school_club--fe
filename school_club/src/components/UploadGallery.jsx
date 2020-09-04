import React, { useState, useEffect } from 'react'

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
      <h3>UPLOAD IMAGES</h3>
    
  
      <label>
        Cover
        <input type="file" onChange={(evt) => setImage(evt.target.files[0])}/>
      </label>
      <br/>
      <button onClick={() => UploadGallery()}>Upload</button>
    </div>
  );
}

export default UploadGallery;