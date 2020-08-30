import React, { useState, useEffect } from "react";
import "../css/News.css";
import logo from "../images/music.png";
import { getRequest } from "../config/axios.config";

function News() {
  const [articleTitle, setArticleTitle] = useState("hwasdasdasdy");
  const [articleDescription, setArticleDescription] = useState("eaasdasdsdd");
  const [id, setId] = useState(1);


  useEffect(() => {
    async function fetchMyApi(event) {
      try {
        let response = await getRequest(`/post/`);
        // setArticle({...article, articleTitle: response.data.title})
        // console.log(article.articleTitle)
        // console.log(response.data.id)

        setArticleTitle(response.data.title);
        setArticleDescription(response.data.id);
        console.log(response.data.title);
        console.log(response.data.id);
      } catch (err) {
        console.log(err);
      }
    }
    fetchMyApi();
  }, []);

  return (
    <React.Fragment>
      {/* <section>
        <div className="container">
          <div className="text-center">
            <span className="text-left text-cursive h2 text-red d-block">News</span>
          </div>
          
            <div className="news col-6 align-center d-flex">
              <div className="news-wrap">
                <div className="text-lg">
                  <h1>{articleTitle}</h1>
                </div>
                <div className="text-sm">
                  <p>{articleDescription}</p>
                </div>
              </div>
            </div>
         
        </div>
      </section> */}
      <header className="text-left text-cursive h2 text-red d-block">
        News
      </header>
      
      
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 col-xs-12">
            <div className="card">
              <div className="card-body d-block">
                {/* <div className="img-fluid rounded-circle w-100 mb-3"> */}
                <img
                  src={logo}
                  alt=""
                  className="img-fluid float-left rounded-circle w-50 "
                />
                {/* </div> */}

                {/* <div className="news-post_info"> */}
                {/* <div className="news-post_date"> */}
                <span className="card-body text-md-right h5 text-cursive">
                  2020-01-01
                </span>
                <br />

                {/* </div> */}
                {/* <h2 className="news-post_title">{articleTitle}</h2> */}
                <h2 className="card-body text-md-left mb-0">Music News</h2>
                {/* <p className="news-post_description">{articleDescription}</p> */}
                <div className="card-body text-sm text-sm-left ">
                  <p className="card-body text-sm text-sm-left ">
                    Lorem ipsum t vero eos et accusamus et iusto odio
                    dignissimos ducimus qui blanditiis praesentium voluptatum
                    deleniti atque corrupti quos dolores et quas molestias
                    excepturi sint occaecati cupiditate non provident, similique
                    sunt in culpa.
                  </p>
                  <footer className="blockquote-footer text-right text-lg">
                    By <cite title="Source Title">President</cite>
                  </footer>
                </div>

                <div className="d-flex flex-row d-inline justify-content-left">
                  <div className="p-4">
                    <a href="/" className="btn btn-success mb-3">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      
      
      
    </React.Fragment>
  );
}

export default News;
