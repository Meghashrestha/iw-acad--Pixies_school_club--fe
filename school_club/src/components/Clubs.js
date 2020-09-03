import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import "../css/Club.css";
import Club_description from './Club_description'
import {getRequest} from '../config/axios.config'

function Clubs(){

    const [clubs, setClubs] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function fetchMyApi() {
            setIsLoading(true)
            try{
                let response = await getRequest('/view-club/')
                console.log('data',response.data.results)
                setClubs(response.data.results)
                setIsLoading(false)
            }
            catch(err){
                console.log(err)
                setIsLoading(false)
            }
        }
        fetchMyApi()
            
            }, [])

            return (
                <React.Fragment>               
                    <div class="site-section-club ">
                        <div class="container">
                            <div class="row mb-5">
                            <div class="col-12 text-center">
                                <span class="text-cursive h2 text-red d-block">Pixies</span>
                                <h2 class="text-white h2">OUR CLUBS</h2>
                            </div>
                            </div>
                            <div class="row">
                                {clubs.map(club => {
                                    return (
                                    <div class="col-lg-4 mb-4 mb-lg-0">
                                    <div class="package text-center bg-white mb-4">
                                    {/* <span class="img-wrap" id="science"><img src={science} alt="Image" class="img-fluid" /></span> */}
                                    <h3 class="text-teal">{club.club_name}</h3>
                                        <span>{club.description}</span>
                                    <p><Link to="/clubs/description" class="btn btn-warning btn-custom-1 mt-4">Learn More</Link></p>
                                </div>
                                </div>
                                )
                                })}
                            </div>
                        </div>
                    </div>
                </React.Fragment>  
        );
}

export default Clubs;