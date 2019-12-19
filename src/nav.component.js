import React, { Component } from 'react'
import emporium from '@xura/data';

export default class extends Component {
    state = {
        count: 0
    };

    componentDidMount() {

    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="brand-logo">single-spa</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a>Home</a></li>
                        <li><a>AngularJS</a></li>
                        <li>{this.state.count}</li>
                    </ul>
                </div>
            </nav>
        )
    }
};