import React, { useState, useEffect} from 'react';
import { withRouter, useHistory  } from 'react-router-dom'
import {connect} from 'react-redux';

import {getRequest, patchRequest} from '../config/axios.config'

function ManagePresident(props){

    const [president, setPresident] = useState([])
    const [isPresident, setIsPresident] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [status, setStatus] = useState();

    let history = useHistory()

    useEffect(() => {
        async function fetchMyApi() {
            setIsLoading(true)
            try{
                let response = await getRequest('/view-staff/')
                console.log('members to add',response.data.results)
                setPresident(response.data.results)
                setIsLoading(false)
            }
            catch(err){
                console.log(err)
                setIsLoading(false)
            }
        }
        fetchMyApi()
            
            }, [])

            const handleSubmit = (event) => {
                event.preventDefault();

                async function patchtMyApi() {
        
                    try {
                      let response = await patchRequest(
                        `/info/view-profile/${isPresident.member}`,
                        {
                          is_staff: status,
                        }
                      );
                    } catch (err) {
                      console.log(err);
                    }
                  }
                  patchtMyApi();
            }

            const handleChangeI = (event) => {
                const copy2 = Object.assign({}, isPresident)
                const e = event.currentTarget
                copy2[e.name] = e.value
                setIsPresident(copy2)
            }

            const toggleStatus = (event) => {
                setStatus((value) => !value);
                console.log(event.target.checked);
              };
        
console.log(isPresident.isPresident)
console.log(president)
            return (
                <React.Fragment>            
                    <div class="site-section-club ">
                        <div class="container">
                            <div class="row mb-5">
                            <div class="col-12 text-center">
                                <span class="text-cursive h2 text-red d-block">Pixies</span>
                                <h2 class="text-white h2">Presidents</h2>
                            </div>
                            </div>  
                            <div class="row">
                                
                                {president.map(presidents => {
                                    return (
                                        // <form onSubmit={handleSubmit}>
                                    <div class="col-lg-4 mb-4 mb-lg-0">
                                    <div class="package text-center bg-white mb-4">
                                     <label>Club Name:  <h3 class="text-teal">{presidents.club_name} </h3></label>  
                                     <label>President Name:    <h3 class="text-teal">{presidents.user}</h3></label>  
                                   
                                </div>
                                </div>
                                        // </form>
                                )
                                })}
                            </div>
                        </div>
                    </div>
                     {/* <div>
                         <div className="form-group col-12 col-xl-8 col-lg-8 col-md-12 col-sm-12">
                    <select name='isPresident' value={isPresident.isPresident} className="form-control" onChange={handleChangeI}>
                        <option value=''>Select User</option>
                       {    
                           president.map(user => <option key={user.id} value={user.id}>{user.user}</option>)
                       }
                       </select>
                        </div>
                   </div> */}
               </React.Fragment>  
        );
}

// const mapDispatchToProps = (dispatch) => ({
//     setDesp: (user) => dispatch(setDesp(user)),
//     });
    
//     export default connect(null, mapDispatchToProps)(withRouter(ManageMember));

export default ManagePresident;