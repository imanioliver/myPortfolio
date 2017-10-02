import React, { Component } from 'react';
import NavBar from './NavBar.js';
import { NavLink } from 'react-router-dom';
import FAQs from './FAQs'
import Projects from './Projects'
import About from './About'

export default class Home extends Component {

    // <div class="h-intro-holder">
    //     <div class="h-intro">
    //         <div class="line-1">
    //             <span>I</span>
    //             <span>M</span>
    //             <span>A</span>
    //             <span>N</span>
    //             <span>I</span>
    //             <span class="space"> </span>
    //             <span>O</span>
    //             <span>L</span>
    //             <span>I</span>
    //             <span>V</span>
    //             <span>E</span>
    //             <span>R</span>
    //             <span class="space"> </span>
    //         </div>
    //     </div>
    // </div>

    render(){
        let yellowStyle={
            "margin-left" : "-713.968px",
            "transform" : "rotate(-83.8832deg)",
        }

        let cyanStyle = {
            "margin-left" : "-1007.32px",
            "transform" : "rotate(106.117deg)"
        }

        return (
            <section id="home">
            <NavBar/>
            <div className="portfolioTop">
                <div className="ImaniOliver">

                <div className="lemonsBackground">
                    <div className="home-intro ">
                        <div className="h-intro-box-outer">
                            <div className="yellow-box" data-x="-724" data-y="-85" style={{yellowStyle}}>
                            </div>
                            <div className="cyan-box" data-x="-1021" data-y="105" style={{cyanStyle}}>
                            </div>
                        </div>


                    </div>
                </div>
                <h1>Imani Oliver</h1>
                </div>
            </div>

            <aside className="aboutTop section-flush h-web-design canvas">
                <div className="imaniImage"></div>
                <h4>I'm a full stack developer based in Atlanta, Georgia. I have a passion for web development and track and field. I love to create in Javascript and build APIs using Node. </h4>
            </aside>
            <About/>
            <Projects/>
            <FAQs/>

            </section>
        )
    }
}
