import React, { useState, useEffect } from 'react'
import science from '../images/description/science.png';
import { Link } from 'react-router-dom'

import {getRequest} from '../config/axios.config'


// export default class Club_description extends Component {
//     render() {
//         return (
//             <React.Fragment>
//                     <div class="site-wrap" id="home-section">

//                         <div class="site-section">
//                         <div class="container">
//                             <div class="row">
//                             <div class="col-md-6">
//                                 <img src={science} alt="Image" class="img-fluid" />
//                             </div>
//                             <div class="col-md-5 ml-auto pl-md-5">
//                                 <span class="text-cursive h5 text-red">About our club</span>
//                                 <h3 class="text-black">WHAT DOES OUR CLUB DO?</h3>
//                                 <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et harum, magni sequi nostrum maxime enim.</span><span>Magnam id atque dicta deleniti, ipsam ipsum distinctio. Facilis praesentium voluptatem accusamus, earum veritatis, laudantium.</span></p>
//                                 <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et harum, magni sequi nostrum maxime enim.</span><span>Magnam id atque dicta deleniti, ipsam ipsum distinctio. Facilis praesentium voluptatem accusamus, earum veritatis, laudantium.</span></p>
//                                 <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et harum, magni sequi nostrum maxime enim.</span><span>Magnam id atque dicta deleniti, ipsam ipsum distinctio. Facilis praesentium voluptatem accusamus, earum veritatis, laudantium.</span></p>
//                                 <span class="text-cursive h5 text-red">INTERESTED?</span>

//                                 <p class="mt-5"><Link to="/login/register" class="btn btn-warning py-4 btn-custom-1">Become a Member</Link></p>
//                             </div>
//                             </div>
//                         </div>
//                         </div>

//                     </div>
//             </React.Fragment>
//         )
//     }
// }


function Club_description(){
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        async function fetchMyApi() {
            try{
                let response = await getRequest('/view-club/')
                setName(response.data.club_name)
                setDescription(response.data.description)
                console.log('data', response.data.results[0].club_name)
                setName(response.data.results[0].club_name)
                setDescription(response.data.results[0].description)
            }
            catch(err){
                console.log(err)
            }
        }
        fetchMyApi()
            
            }, [])

                return (
             <React.Fragment>
                     <div class="site-wrap" id="home-section">
                    
                         <div class="site-section">
                         <div class="container">
                             <div class="row">
                             <div class="col-md-6">
                                 <img src={science} alt="Image" class="img-fluid" />
                             </div>
                             <div class="col-md-5 ml-auto pl-md-5">
                                 <span class="text-cursive h5 text-red">About our club</span>
                                 <p><span>{description}</span></p>
                                 
                                 <span class="text-cursive h5 text-red">INTERESTED?</span>
                    
                                 <p class="mt-5"><Link to="/login/register" class="btn btn-warning py-4 btn-custom-1">Become a Member</Link></p>
                             </div>
                             </div>
                         </div>
                         </div>
                    
                     </div>
                     </React.Fragment>
        );
}

export default Club_description;
