import React from 'react';
import image from '../images/Main-image.jpg';
import '../css/gallery.css'





function Gallery() {
    return <div className="main-image">
        <img className="image" src={image} alt= "" />
        
        
       
    </div>;
    
}

export default Gallery;