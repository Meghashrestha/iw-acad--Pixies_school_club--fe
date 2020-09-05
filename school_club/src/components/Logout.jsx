import React, { Component } from 'react';

function Logout (){

    const logout = () => {
        localStorage.clear('access_token');
        console.log('data', localStorage.key)
      }

        return(
            <div>
                <input type='submit'  onClick={logout}> </input>
            </div>
        );
}

export default Logout;