import React, { Component } from 'react'
import { connect, data, connection } from '@xura/data';

export default class extends Component {
    state = {
        name: 0
    };

    componentDidMount() {
        data.achievements.stream()
            .then(stream => stream.subscribe(achievement => {
                this.setState({
                    name: achievement.name
                })
            }));
    }

    addAchievement = () => {
        const rand = Math.random()
        data.achievements.repo.save({
            id: rand,
            name: rand
        })
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="bra1nd-logo">single-spa</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a>Home</a></li>
                        <li><a>sws</a></li>
                        <li>{this.state.name}</li>
                    </ul>
                    <button onClick={this.addAchievement}>Add Achievement</button>
                </div>
            </nav>
        )
    }
};