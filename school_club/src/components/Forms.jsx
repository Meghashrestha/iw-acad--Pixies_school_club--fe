import React from 'react';
import {Component} from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: `127.0.0.1:8000/api/`
})

class Forms extends Component{
    constructor(props){
        super(props);
        this.state = {
            p_name: '',
            c_name: '',
            desc: '',
            articles: []
        }
    }

    // createEvent = async () => {
    //     let res = await api.post('/event', this.state)
    // }

    componentDidMount(){
        api.get('/').then(res => {
            this.state({
                articles: res.data
            });
            console.log(res.data);
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state.p_name, this.state.c_name, this.state.desc)
    }
    render(){
        const{p_name, c_name, desc} = this.state
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>President Name</label>
                <input type='text' name='p_name' value={p_name} onChange={this.handleChange} placeholder='President Name'/>
                <label>Club Name</label>
                <input type='text' name='c_name' value={c_name} onChange={this.handleChange} placeholder='Club Name'/>
                <label>Description</label>
                <textarea type='text' name='desc' value={desc} onChange={this.handleChange} placeholder='Description'/>
                <label>Logo</label>
                {/* <input type='file' value={this.state.value} onChange={this.handleChange}/> */}
                <button type='submit' onClick={this.createEvent}>Create</button>
            </form>
            </div>
        );
    }
}

export default Forms;