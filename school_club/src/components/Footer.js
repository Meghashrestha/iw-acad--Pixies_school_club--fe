import React, { Component } from 'react';
import '../css/footer.css' 
import facebook from '../images/icons/001-facebook.png';
import twitter from '../images/icons/013-twitter.png';
import linkedin from '../images/icons/010-linkedin.png';
import insta from '../images/icons/011-instagram.png';
import messenger from '../images/icons/012-messenger.png';



class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                        <div className="row">
                            <div className="column">
                                <ul className="list">
                                    <li><img src={facebook} alt= ""></img></li>
                                    <li><img src={twitter} alt= ""></img></li>
                                    <li><img src={linkedin} alt= ""></img></li>
                                    <li><img src={messenger} alt= ""></img></li>
                                    <li><img src={insta} alt= ""></img></li>

                                </ul>
                            </div>
                            <div className="column">
                                <ol className="list" >
                                    <text>
                                        <li>Address: New Baneshwor, Kathmandu</li>
                                        <li>Email:meghashrestha30@gmail.com </li>
                                        <li>Contact: +977-9812345678</li>
                                    </text>
                                </ol>
                            </div>
                        </div>
            </div>
        
        );
    }
}

export default Footer;