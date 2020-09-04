import React, { useState, useEffect} from 'react';
import { withRouter, useHistory  } from 'react-router-dom'
import {connect} from 'react-redux';

import {getRequest} from '../config/axios.config'

function ManageMember(props){

    const [members, setMembers] = useState([])
    const [isMember, setIsMember] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    let history = useHistory()

    useEffect(() => {
        async function fetchMyApi() {
            setIsLoading(true)
            try{
                let response = await getRequest('/user-view/')
                console.log('members to add',response.data.results)
                setMembers(response.data.results)
                setIsLoading(false)
            }
            catch(err){
                console.log(err)
                setIsLoading(false)
            }
        }
        fetchMyApi()
            
            }, [])

            const handleClick = (description) => {
               props.setDesp(description) 
               console.log('/clubs/description')
               return history.push('/clubs/description/')
            }

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
                                {members.map(member => {
                                    return (
                                    <div class="col-lg-4 mb-4 mb-lg-0">
                                    <div class="package text-center bg-white mb-4">
                                        <h3 class="text-teal">{member.first_name} {member.last_name}</h3> =>  <h3 class="text-teal">{member.club_name} </h3>
                                        <h3 class="text-teal">{member.user}</h3>
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

// const mapDispatchToProps = (dispatch) => ({
//     setDesp: (user) => dispatch(setDesp(user)),
//     });
    
//     export default connect(null, mapDispatchToProps)(withRouter(ManageMember));

export default ManageMember