import React, { useState, useEffect} from 'react';

import {getRequest} from '../config/axios.config' ;


function News(){

  const [articleTitle, setArticleTitle] = useState('hwasdasdasdy')
  const [articleDescription, setArticleDescription] = useState('eaasdasdsdd')
  const [id, setId] = useState(1)

  // const[article, setArticle] = useState({
  //   id: '',
  //   articleTitle: '',
  //   articleDescription: '',
  // })

  useEffect(() => {
    async function fetchMyApi(event) {
        try{
            let response = await getRequest(`/posts/1`)
            // setArticle({...article, articleTitle: response.data.title})
            // console.log(article.articleTitle)
            // console.log(response.data.id)

            setArticleTitle(response.data.title)
            setArticleDescription(response.data.id)
            console.log(response.data.title)
            console.log(response.data.id)
        }
        catch(err){
            console.log(err)
        }
    }
    fetchMyApi()
}, [])

return(
  <React.Fragment>
    <div className="site-section">
              <div className="container">
                <div className="col-12 text-center">
                  <span className="text-cursive h1 text-red d-block">News</span>
                </div>
                <div className=" block-8">
                  <div className="news-12 align-center d-flex">
                    <div className="news-wrap">
                      <div className="text">
                        <h1>{articleTitle}</h1>
              <h1>{id}</h1>
                        <p>
                          {articleDescription}
                        </p>
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