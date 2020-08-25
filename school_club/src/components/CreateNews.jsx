import React, { Component } from 'react'

import {postRequest} from '../config/axios.config'
import "../css/CreateNews.css";

export default class CreateClub extends Component {
    constructor(props){
        super(props);
        this.state = {
            article_title: '',
            article_description: '',
            all: '',
        }
    }
   
    handleSubmit = async(event) => {
        const {article_title, article_description, all} = this.state;
        try{
            let response = await postRequest('/article',{
                user: {
                    article_title: article_title,
                    article_description: article_description,
                    all: all,
                }
            })
        }
        catch(err){
            console.log(err)
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const {article_title, article_description, all} = this.state;
        return (
            <React.Fragment>
            <header className="text-cursive text-red d-block">Publish News</header>
            


            <section className="news-section-form">
          <form className="news-create-form" onSubmit={this.handleSubmit}>
            <div className="news-wrap-input">
              
              <input type='text' name='article_title' value={article_title} placeholder=' Title' onChange={this.handleChange} />
            </div>
            <div className="news-wrap-input">
             
              <input type='text' name='article_description' value={article_description} placeholder='News Content' onChange={this.handleChange} />
            </div>
            <div className="news-logo-div">
              <span className="news-label-input">For</span>
              <select type='radio button' name='all' value={all} onChange={this.handleChange}>
                            <option>Admin</option>
                            <option>Staff</option>
                            <option>Member</option>
                        </select>
            </div>

            <div className="news-form-btn-class">
              <button className="news-form-btn" type="submit" >Publish</button>
             
            </div>
          </form>
        </section>
            </React.Fragment>
        )
    }
}
