import React, { useState, useEffect } from 'react'

import {postRequest, getRequest} from '../config/axios.config'

import "../css/CreateNews.css";


function CreateNews(){

  const [article, setArticle] = useState({
    articleTitle: '',
    articleDescription: '',
    all: true
  })
    // useEffect(() => {
    //     async function fetchMyApi() {
    //         try{
    //             let response = await getRequest('/post')
    //             console.log(response.data)
    //         }
    //         catch(err){
    //             console.log(err)
    //         }
    //     }
    //     fetchMyApi()
    // }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        async function postMyApi() {    
            try{
                let response = await postRequest('/post-article/',{
                        article_title: article.articleTitle,
                        article_description: article.articleDescription,
                        all: article.all
                })
            }    
            catch(err){
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
        <header className="text-cursive text-red d-block">Publish News</header>
        


        <section className="news-section-form">
      <form className="news-create-form" onSubmit={handleSubmit}>
        <div className="news-wrap-input">
          
        <input type='text' name='articleTitle' value={article.articleTitle} placeholder='Title' onChange={handleChange}></input>
        </div>
        <div className="news-wrap-input">
         
        <textarea type='text' name='articleDescription' value={article.articleDescription} placeholder='Write a description' onChange={handleChange}></textarea>
        </div>
       
        <div className="news-form-btn-class">
          <button className="news-form-btn" type="submit" >Publish</button>
         
        </div>
      </form>
    </section>
        </React.Fragment>
    )


}

export default CreateNews;