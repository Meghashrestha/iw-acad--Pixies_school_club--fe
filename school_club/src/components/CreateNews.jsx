import React, { useState, useEffect } from "react";

import { postRequest, getRequest } from "../config/axios.config";

import "../css/CreateNews.css";

function CreateNews() {
  const [articleTitle, setArticleTitle] = useState("");
  const [articleDescription, setArticleDescription] = useState("");
  const [all, setAll] = useState(false);

  useEffect(() => {
    async function fetchMyApi() {
      try {
        let response = await getRequest("/post");
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchMyApi();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    async function postMyApi() {
      try {
        let response = await postRequest("/login/post-article/", {
          Article: {
            article_title: articleTitle,
            article_description: articleDescription,
            all: all,
          },
        });
      } catch (err) {
        console.log(err);
      }
    }
    postMyApi();
  };

  const handleChange = (event) => {
    setArticleTitle(event.target.name.value);
    setArticleDescription(event.target.name.value);
    setAll(event.target.name.value);
    console.log(articleTitle);
  };
  return (
    <React.Fragment>
      <header className="text-left text-cursive text-red d-block">Publish News</header>

      <section className="news-section-form">
        <form className="news-create-form" onSubmit={handleSubmit}>
          <div className="news-wrap-input">
            <input
              type="text"
              name={articleTitle}
              value={articleTitle}
              placeholder="Title"
              onChange={handleChange}
            ></input>
          </div>
          <div className="news-wrap-input">
            <textarea
              type="text"
              name={articleDescription}
              value={articleDescription}
              placeholder="Write a description"
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="news-form-btn-class">
            <button className="news-form-btn" type="submit">
              Publish
            </button>
          </div>
        </form>
      </section>
    </React.Fragment>
  );
}

export default CreateNews;
