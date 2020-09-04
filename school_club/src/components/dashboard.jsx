import React, { useState, useEffect } from "react";
import "../css/News.css";
import logo from "../images/music.png";
import { getRequest } from "../config/axios.config";

function Dashboard() {
  const [article, setArticle] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchMyApi(event) {
      try {
        let response = await getRequest(`/article/`);
        console.log(response.data.results)
        setArticle(response.data.results)
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
       <header className="text-lg text-cursive text-red text-left mt-5">
          Dashboard
        </header>
      
      <div className="container">
        <div className="row">
          {article.map(articles => {
            return(
              <div className="col-lg-8 col-md-8 col-sm-8">
              <div className="card h-auto">
                <div className="card-body d-block">
                  {/* <div className="img-fluid rounded-circle w-100 mb-3"> */}
                  <img
                    src={logo}
                    alt="logo.jpg"
                    className="img-fluid float-left rounded-circle w-50 "
                  />
                  {/* </div> */}
  
                  {/* <div className="news-post_info"> */}
                  {/* <div className="news-post_date"> */}
                    {/* <span className="card-body text-md-right h5 text-cursive">
                      2020-01-01
                    </span> */}
                  <br />
  
                  {/* </div> */}
                  {/* <h2 className="news-post_title">{articleTitle}</h2> */}
                  <h2 className="card-body text-md-left mb-0">{articles.article_title}</h2>
                  {/* <p className="news-post_description">{articleDescription}</p> */}
                  <div className="card-body text-sm text-sm-left ">
                    <p className="card-body text-sm text-sm-left ">
                    {articles.article_description}
                    </p>
                    {/* <footer className="blockquote-footer text-right text-lg">
                      By <cite title="Source Title">President</cite>
                    </footer> */}
                  </div>
                  <br></br>
  
                  {/* <div className="d-flex flex-row d-inline justify-content-left">
                    <div className="p-4">
                      <a href="/" className="btn btn-success mb-3">
                        Read more
                      </a>
                    </div>
                  </div> */}
                </div>
                {/* </div> */}
              </div>
            </div>
            )
          })}
         
        </div>
      </div>
      
      
      
    </React.Fragment>
  );
}

export default Dashboard;
