import React from "react";

import "../css/News.css";
import News from "./News";
import Event from "./EventDashboard";

function Dashboard() {

  return (
    <React.Fragment>
      <header className="text-left text-cursive text-red d-block mt-5">
        Your Feed
      </header>

      <div className="row ">
        <div className="col-3">
          <News />
        </div>
        <div className="col-4"></div>
        <div className="event-card col-4 mt-5">
          <Event />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
