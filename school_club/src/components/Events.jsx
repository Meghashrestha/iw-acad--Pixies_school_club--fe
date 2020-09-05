import React, { useState, useEffect } from "react";
import "../css/News.css";
import logo from "../images/music.png";
import { getRequest } from "../config/axios.config";

function Events() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMyApi(event) {
      try {
        let response = await getRequest(`/event/`);
        console.log(response);
        setEvents(response.data.results);
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
      <header className="text-left text-cursive h2 text-red d-block">
        Events
      </header>
      
      <div className="container">
        <div className="row">
          {events.map(event => {
            return(
              <div className="col-xl-8 col-lg-10 col-md-8 mb-5">
              <div className="card">
                <div className="card-body d-block">
                 {/* <img
                    src={logo}
                    alt="logo.jpg"
                    className="img-fluid float-left rounded-circle w-50 "
                  /> */}
                  <span className="card-body text-md-right h5 text-cursive">Happening on: 
                  {event.event_date}
                  </span>
                  <br />
                  <h2 className="card-body text-md-left mb-0 text-lg-left text-sm-left text-left">{event.event_title}</h2>
                           <div className="card-body text-sm text-sm-left ">
                    <p className="card-body text-sm text-sm-left ">
                    {event.event_description}
                    </p>
                   <span>-{event.created_by}</span>
                  </div>
                </div>
              </div>
            </div>
            )
          })}
         
        </div>
      </div>
      
      
      
    </React.Fragment>
  );
}

export default Events;
