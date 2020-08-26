import React, { useState, useEffect} from 'react';

import {getRequest} from '../config/axios.config' ;


function News(){

  const [articleTitle, setArticleTitle] = useState('')
  const [articleDescription, setArticleDescription] = useState('')

  useEffect(() => {
    async function fetchMyApi() {
        try{
            let response = await getRequest('/post')
            console.log(response.data)
        }
        catch(err){
            console.log(err)
        }
    }
    fetchMyApi()
}, [])

return(
  <div className="site-section">
            <div className="container">
              <div className="col-12 text-center">
                <span className="text-cursive h1 text-red d-block">News</span>
              </div>
              <div className=" block-8">
                <div className="news-12 align-center d-flex">
                  <div className="news-wrap">
                    <div className="text">
                      <h3>{}</h3>

                      <p>
                        
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
);

}

export default News;