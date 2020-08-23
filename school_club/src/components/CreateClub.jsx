import React, { Component } from 'react'
import Forms from './Forms'

import {postRequest} from '../config/axios.config'
import "../css/CreateClub.css";
import '../css/main_body.css'


export default class CreateClub extends Component {
    constructor(props){
        super(props);
        this.state = {
                club_name: '',
                description: '',
                logo: '',
        }
    }

    handleSubmit = async (event) => {
        const{club_name, description, logo} = this.state;
        try{
            let response = await postRequest('/club/',{
                user: {
                    club_name: club_name,
                    description: description,
                    logo: logo,
                }
            })
        }
        catch (err){
            console.log(err)
        }

        event.preventDefault();
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const{club_name, description, logo} = this.state;
        return (
            <section>
                <form onSubmit={this.handleSubmit}>
                    <label>Club Name: 
                        <input type='text' name='club_name' value={club_name} placeholder='Club Name' onChange={this.handleChange}/>
                        </label>
                    <label>Club Name: 
                        <input type='text' name='description' value={description} placeholder='Description' onChange={this.handleChange}/>
                    </label>
                    <label>Club Name: 
                        <input type='file' name='club_name' value={logo} onChange={this.handleChange}/>
                        </label>
                </form>
            </section>
        )
    }
}
