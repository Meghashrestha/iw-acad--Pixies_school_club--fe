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
      {image.map((images) => {
        return (
          <div clasName="row d-flex">
            <div className="col-12">
              <img
                src={images.image}
                alt=""
                className="img-fluid col-4 border-black px-3 py-3"
              />
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default Gallery;
