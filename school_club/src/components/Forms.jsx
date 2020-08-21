import React from 'react';
import {Component} from 'react';
import {Form} from 'antd';


class Forms extends Component{
    constructor(props){
        super(props);
        this.state = {value: ''}
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
        console.log(this.value)
    }
    render(){
        return(
            <div>
            <form onSubmit={this.handleFormSubmit}>
                <label>President Name</label>
                <input type='text' value={this.state.value} onChange={this.handleChange} placeholder='President Name'/>
                <label>Club Name</label>
                <input type='text' value={this.state.value} onChange={this.handleChange} placeholder='Club Name'/>
                <label>Description</label>
                <textarea type='text' value={this.state.value} onChange={this.handleChange} placeholder='Description'/>
                <label>Logo</label>
                <input type='file' value={this.state.value} onChange={this.handleChange}/>
                <button type='submit'>Create</button>
            </form>
            </div>
        );
    }
}

export default Forms;