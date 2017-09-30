import React, { Component } from 'react';
import NavBar2 from './NavBar2.js';
import { NavLink } from 'react-router-dom';

export default class Portfolio extends Component {
    render(){
        return (
            <div>
            <NavBar2/>
                <h3> this is my Portfolio page. it should have links to my github projects and some photos of them </h3>
                <h1>THIS might just end up being my contact me page, or I'll submit the project with this  and then edit it afterwards. I might just put a popover on the main home page that shows my contact info when you click a button. Or maybe just a modal. or just link to my linked in and github with fontawesome icons underneath my face photo.</h1>
                <h5>but remember, this is also where you'll put contacts (but looping in data and mapping) that have already referred you.

                write recommendations for both Lindsey and Lindsay</h5>

                <h1> ACTUALLY I want this page to look just like a resume, like sean's. I should be able to send this as a resume out to employers instead of the google doc sometimes</h1>
            </div>
        )
    }
}
