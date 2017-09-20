import React, { Component } from 'react';
import '../styles/App.css';
import { NavLink } from 'react-router-dom';


export default class BaseLayout extends Component {

    render(){
        return (
            
            <div>{this.props.children}</div>
        )
    }
}
