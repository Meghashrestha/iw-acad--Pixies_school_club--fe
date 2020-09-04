import React, { useState, useEffect } from 'react'

import {postRequest} from '../config/axios.config'

import "../css/CreateNews.css";


function CreateNews(){

  const [article, setArticle] = useState({
    articleTitle: '',
    articleDescription: '',
    all: true
  })
  
    const handleSubmit = (event) => {
        event.preventDefault();
        async function postMyApi() {    
            try{
                let response = await postRequest('/post-article/',{
                        article_title: article.articleTitle,
                        article_description: article.articleDescription,
                        all: article.all
                })
                alert("Successfully Posted")
            }    
            catch(err){
              alert("Something went wrong")
                console.log(err)
            }    
        }
        postMyApi()
    }

    const handleChange = (event) => {
       const copy = Object.assign({}, article)
       const e = event.currentTarget
       copy[e.name] = e.value
       setArticle(copy)
    }

    return(
        <React.Fragment>
        <header className="text-left text-cursive text-red d-block mt-5">Publish News</header>
              <form className="col-xl-10 col-lg-10 col-md-12 col-sm-12" onSubmit={handleSubmit}>
            <div className="form-group w-100  pt-3 pl-4 ">
              <label className="mt-4">Title</label><br/>
              <input type='text' name='articleTitle' value={article.articleTitle} placeholder='Title' onChange={handleChange}></input>
            </div>
            <div className="form-group w-100 pt-3 pl-4">
              <label>News Description</label>
              <textarea type='text' name='articleDescription' value={article.articleDescription} placeholder='Write a description' onChange={handleChange}></textarea>
            </div>
            <div class="col text-center">
              <button
                type="submit"
                className="btn btn-primary text-center mt-3 mb-4"
              >
                Publish
              </button>
            </div>
          </form>
   
        </React.Fragment>
    )


}

export default CreateNews;