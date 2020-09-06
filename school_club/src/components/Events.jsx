import React, { useState, useEffect } from "react";

import "../css/News.css";
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
      <header className="text-left text-cursive text-red d-block mt-5">
        Events
      </header>

      <div className="container">
        <div className="row">
          {events.map((event) => {
            return (
              <div className="col-xl-8 col-lg-10 col-md-8 mb-5">
                <div className="card">
                  <div className="card-body d-block">
                    <span className="card-body text-left text-cursive h4 text-red">
                      Event on :{event.event_date}
                    </span>
                    <br />
                    <h2 className="card-body text-md-left mb-0 text-lg-left text-sm-left text-left">
                      {event.event_title}
                    </h2>
                    <div className="card-body text-sm text-sm-left ">
                      <p className="card-body text-sm text-sm-left ">
                        {event.event_description}
                      </p>
                      <span>From - {event.created_by}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Events;
