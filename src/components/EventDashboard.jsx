import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      <div className="container">
        <div className="card col-4 px-0 py-1">
          <div className="card-body d-block">
            <header className="text-center text-cursive text-red d-block mt-2">
              Events
            </header>
            {events.map((event) => {
              return (
                <div className="col-10">
                  <span className="card-body text-left text-cursive h4 text-red col-3">
                    {event.event_date}
                  </span>

                  <span className="card-body">
                    {event.event_title}[ {event.created_by} ]
                  </span>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            {" "}
            <Link to="/panel/events/">See More</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Events;
