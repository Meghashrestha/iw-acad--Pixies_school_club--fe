import React, { useState, useEffect } from "react";
import "../css/gallery.css";
import logo from "../images/music.png";
import { getRequest } from "../config/axios.config";

function Gallery() {
  const [image, setImage] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchMyApi(event) {
      try {
        let response = await getRequest(`/gallery/`);
        console.log(response.data.results)
        setImage(response.data.results)
        setIsLoading(false)
      } catch (err) {
        console.log(err);
        setIsLoading(false)
      }
    }
    fetchMyApi();
  }, []);

  return (
    <React.Fragment>
 
      

          {image.map(images => {
            return(
              <div class="responsive">
                <div class="gallery">

                  <img
                    src= {images.image}
                    alt="hh"
                  />
            
            </div>
      </div>
      
            )
          })}
         

      
      
    </React.Fragment>
  );
}

export default Gallery;
