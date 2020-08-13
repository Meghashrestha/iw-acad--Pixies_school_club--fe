import React from 'react';
import science  from '../images/science.png';
import art from '../images/art.png';
import drama from '../images/drama.png';
import music from '../images/music.png';
import sports from '../images/sports.png';
import photography from '../images/photography.png';
import '../css/Club.css';

class Clubs extends React.Component {
   
    render(){
        return (
                <React.Fragment>               
                    <div class="site-section bg-info">
                        <div class="container">
                            <div class="row mb-5">
                            <div class="col-12 text-center">
                                <span class="text-cursive h5 text-red d-block">Pixies</span>
                                <h2 class="text-white">OUR CLUBS</h2>
                            </div>
                            </div>
                            <div class="row">
                            <div class="col-lg-4 mb-4 mb-lg-0">
                                <div class="package text-center bg-white">
                                <span class="img-wrap"><img src={science} alt="Image" class="img-fluid" /></span>
                                <h3 class="text-teal">SCIENCE CLUB</h3>
                                <p><a href="#" class="btn btn-info btn-custom-1 mt-4">GET TO KNOW SOME MORE</a></p>
                            </div>
                            </div>
                            <div class="col-lg-4 mb-4 mb-lg-0">
                                <div class="package text-center bg-white">
                                <span class="img-wrap"><img src={photography} alt="Image" class="img-fluid" /></span>
                                <h3 class="text-warning">PHOTOGRAPHY</h3>
                                <p><a href="#" class="btn btn-warning btn-custom-1 mt-4">GET TO KNOW SOME MORE</a></p>
                                </div>
                            </div>
                            <div class="col-lg-4 mb-4 mb-lg-0">
                                <div class="package text-center bg-white">
                                <span class="img-wrap"><img src={music} alt="Image" class="img-fluid" /></span>
                                <h3 class="text-secondary">MUSIC CLUB</h3>
                                <p><a href="#" class="btn btn-secondary btn-custom-1 mt-4">GET TO KNOW SOME MORE</a></p>
                                </div>
                            </div>
                            </div>
                            <div class="row">
                            <div class="col-lg-4 mb-4 mb-lg-0">
                                <div class="package text-center bg-white">
                                <span class="img-wrap"><img src={sports} alt="Image" class="img-fluid" /></span>
                                <h3 class="text-success">SPORTS CLUB</h3>
                                <p><a href="#" class="btn btn-success btn-custom-1 mt-4">GET TO KNOW SOME MORE</a></p>
                            </div>
                            </div>
                            <div class="col-lg-4 mb-4 mb-lg-0">
                                <div class="package text-center bg-white">
                                <span class="img-wrap"><img src={art} alt="Image" class="img-fluid" /></span>
                                <h3 class="text-teal">ART CLUB</h3>
                                <p><a href="#" class="btn btn-info btn-custom-1 mt-4">GET TO KNOW SOME MORE</a></p>
                                </div>
                            </div>
                            <div class="col-lg-4 mb-4 mb-lg-0">
                                <div class="package text-center bg-white">
                                <span class="img-wrap"><img src={drama} alt="Image" class="img-fluid" /></span>
                                <h3 class="text-danger">DRAMA CLUB</h3>
                                <p><a href="#" class="btn btn-primary btn-custom-1 mt-4">GET TO KNOW SOME MORE</a></p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>  
        );
}
}

export default Clubs;