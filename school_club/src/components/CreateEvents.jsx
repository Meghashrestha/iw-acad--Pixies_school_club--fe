import React, { Component } from 'react';

class CreateEvents extends Component{
    render(){
        return(
            <React.Fragment>
                <div className='comp-sub-body'>
                    <label>Event Title</label><input type='text'></input><br></br>
                    <label>Event Description</label><input type='text'></input><br></br>
                    <label>Event Date</label><input type='text'></input><br></br>
                    <button type='submit'>Create</button>
                </div>
            </React.Fragment>
        );
    }
}

export default CreateEvents