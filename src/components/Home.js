import React, { Component } from 'react';
import NavBar from './NavBar.js';
import { NavLink } from 'react-router-dom';
import FAQs from './FAQs'
import Projects from './Projects'
import About from './About'

export default class Home extends Component {
    render(){
        return (
            <section id="home">
            <NavBar/>
                <div>I'm a full stack developer based in Atlanta, Georgia. I have a passion for web development and track and field. I love to create in Javascript and build APIs using Node. </div>
            <About/>
            <Projects/>
            <FAQs/>

            </section>
        )
    }
}
