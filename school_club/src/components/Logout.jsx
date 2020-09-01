import React, { Component } from 'react';

function Logout (){

    const logout = () => {
        localStorage.clear('access_token');
        console.log('data', localStorage.key)
      }

        return(
            <div>
                <button type='submit' onClick={logout}> Logout </button>
            </div>
        );
}

export default Logout;