import React, { Component } from 'react'

import "../css/CreateClub.css";
import '../css/main_body.css'


export default class CreateClub extends Component {
    render() {
        return (
            <React.Fragment>
                <section className='comp-sub-body'>
                    <label>President Name</label><input type='text' label='club name'></input><br></br>
                    <label>Club Name</label><input type='text' label='club name'></input><br></br>
                    <label>Description</label><input type='text' label='club name'></input><br></br>
                    <label>Logo</label><input type='text' label='club name'></input><br></br>
                    <button type='submit'>Create</button>
                </section>
            </React.Fragment>
        )
    }
}
