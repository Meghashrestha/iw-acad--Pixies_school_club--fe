import React, { useState, useEffect } from "react";

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
      <div className="site-section">
        <div className="container">
          <div className="col-md-8 text-center">
            <span className="text-cursive h2 text-red d-block">News</span>
          </div>
          <div className=" col-8">
            <div className="news align-center d-flex">
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
        </div>
      </div>
    </React.Fragment>
  );
}

export default News;
