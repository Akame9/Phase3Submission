import React, { Component } from 'react';

class welcome extends Component {
    constructor(props) {
        super(props)

        this.state = {
        
        }

    }

    signup(){
        this.props.history.push('/signup');
    }

    signin(){
        this.props.history.push('/signin');
    }

    render() {
        return (
            
            <div>
                <p>
                <button className="btn btn-dark" onClick={this.signin.bind(this)}>login</button>
                <button className="btn btn-dark" onClick={this.signup.bind(this)}>signup</button>
                </p>
                <div>
                    <h1>WELCOME TO STOCKMART</h1>
                    <h6>An online place for stock market charting</h6>
            
                </div>
            </div>
        );
    }
}

export default welcome;