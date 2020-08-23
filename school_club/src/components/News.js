import React from 'react';

import {getRequest} from '../config/axios.config' 

class News extends React.Component {
    
    render(){
        return (
            <div class="site-section">
            <div class="container">
              <div className="col-12 text-center">
                <span className="text-cursive h1 text-red d-block">News</span>
              </div>
              <div className=" block-8">
                <div className="news-12 align-center d-flex">
                  <div className="news-wrap">
                    <div className="text">
                      <h3>News Title</h3>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aliquam earum libero rem maxime magnam. Similique
                        esse ab earum, autem consectetur.Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aliquam earum libero rem maxime magnam. Similique
                        esse ab earum, autem consectetur.Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aliquam earum libero rem maxime magnam. Similique
                        esse ab earum, autem consectetur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
}
}

export default News;