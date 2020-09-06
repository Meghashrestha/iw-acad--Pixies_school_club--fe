import React, { useState, useEffect } from "react";

import "../css/gallery.css";
import { getRequest } from "../config/axios.config";

function Gallery() {
  const [image, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMyApi(event) {
      try {
        let response = await getRequest(`/gallery/`);
        console.log(response.data.results);
        setImage(response.data.results);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    }
    fetchMyApi();
  }, []);

  return (
    <React.Fragment>
      <div className="dummy d-none d-sm-block "></div>
      <header className="text-center text-red">Gallery</header>
      <div className="col-4 d-inline pt-5">
      {image.map((images) => {
        return (
          <React.Fragment>
         
            <div className="image-wrap">
              
              <img
                src={images.image}
                alt=""
                className="image-gallery px-2 py-3"
              />
            </div>
         </React.Fragment>
        );
      })}
      </div>
    </React.Fragment>
  );
}

export default Gallery;
