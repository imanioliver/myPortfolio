import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class NavBar extends Component {


    render(){

        let styleLink = {
            // backgroundColor: "white",
            textDecoration: "none"
        }

        // <li className="nav-item">
        //   <NavLink className="nav-link active" to="/" style={styleLink}> Bēân <span id="loft"> loft </span></NavLink>
        // </li>
        return(



                <nav id="theNav" className="newNavClass" >
                    <ul className="nav">
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/">Imani</NavLink>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#FAQs">FAQs</a>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cv">CV and Contacts</NavLink>
                        </li>
                    </ul>
                </nav>






        )
    }
}
