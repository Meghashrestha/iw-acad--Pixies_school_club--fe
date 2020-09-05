import React, { useState, useEffect } from "react";
import "../css/News.css";
import logo from "../images/music.png";
import { getRequest } from "../config/axios.config";
import News from "./News";
import Event from "./EventDashboard";

function Dashboard() {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMyApi(event) {
      try {
        let response = await getRequest(`/article/`);
        console.log(response.data.results);
        setArticle(response.data.results);
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
