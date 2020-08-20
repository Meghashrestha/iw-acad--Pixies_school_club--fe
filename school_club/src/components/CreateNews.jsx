import React, { Component } from 'react'
import "../css/CreateClub.css";


export default class CreateClub extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='comp-sub-body'>
                    <label>News Title</label><input type='text'></input><br></br>
                    <label>News Description</label><input type='text'></input><br></br>
                    <button type='submit'>Create</button>
                </div>
            </React.Fragment>
        )
    }
}
