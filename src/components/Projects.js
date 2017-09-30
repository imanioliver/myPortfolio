import React, { Component } from 'react';
import ScrollableAnchor from "react-scrollable-anchor";

export default class Projects extends Component {
    render(){
        return (
            <ScrollableAnchor className="projectAnchor" id={'projects'}>
                <div id="myProjects">
                    I've done these three projects that I want you to take a look at.

                    <div className="card-deck">
                      <div className="card">
                        <img className="card-img-top" src="..." alt="Card image cap"/>
                        <div className="card-block">
                          <h4 className="card-title">iTunes API project</h4>
                          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                      </div>
                      <div className="card">
                        <img className="card-img-top" src="..." alt="Card image cap"/>
                        <div className="card-block">
                          <h4 className="card-title">CodeSnip</h4>
                          <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                      </div>
                      <div className="card">
                        <img className="card-img-top" src="..." alt="Card image cap"/>
                        <div className="card-block">
                          <h4 className="card-title">FLutter</h4>
                          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                      </div>
                    </div>



                </div>
            </ScrollableAnchor>
        )

    }
}
