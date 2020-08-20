import React from 'react';
import {Component} from 'react';

class Application extends Component{
    render(){
        return(
            <React.Fragment>
                <div className='comp-sub-body'>
                    <label>Name</label><input type='text'></input><br></br>
                    <label>Interested Club</label><input type='text'></input><br></br>
                    <button type='submit'>Submit</button>
                </div>
            </React.Fragment>
        );
    }
}

export default Application;

