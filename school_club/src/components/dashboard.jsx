import React, { useState, useEffect } from "react";
import "../css/News.css";
import logo from "../images/music.png";
import { getRequest } from "../config/axios.config";

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
      <header className="text-left text-cursive h2 text-red d-block">
        Your Feed
      </header>

      <div className="container">
        <div className="row">
          {article.map(articles => {
            return(
              <div className="col-lg-8 col-md-10 col-xs-12">
              <div className="card">
                <div className="card-body d-block">
                  {/* <div className="img-fluid rounded-circle w-100 mb-3"> */}
                  <img
                    src={logo}
                    alt="logo.jpg"
                    className="img-fluid float-left rounded-circle w-50 "
                  />
           
                  <br />
  
            
                  <h2 className="card-body text-md-left mb-0">{articles.article_title}</h2>
                  <div className="card-body text-sm text-sm-left ">
                    <p className="card-body text-sm text-sm-left ">
                    {articles.article_description}
                    </p>
              
                  </div>
                  <br></br>
  
                  
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

export default Dashboard;
