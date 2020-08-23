import React, { Component } from 'react'

import {postRequest} from '../config/axios.config'
import "../css/CreateClub.css";

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
            <section>
                <form onSubmit={this.handleSubmit}>
                    <label>Artile Title:
                        <input type='text' name='article_title' value={article_title} placeholder='Article Title' onChange={this.handleChange} />
                    </label>
                    <label>Artile Description:
                        <input type='text' name='article_description' value={article_description} placeholder='Article Description' onChange={this.handleChange} />
                    </label>
                    <label>All:
                        <select type='radio button' name='all' value={all} onChange={this.handleChange}>
                            <option>Admin</option>
                            <option>Staff</option>
                            <option>Member</option>
                        </select>    
                    </label>
                </form>
            </section>
        )
    }
}
