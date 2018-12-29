import React, { Component } from 'react';
import './intro.css'

class Intro extends Component {
    handleSubmit = (event) => {
        this.props.onSubmit()
    }

    handleChange = (event) => {
       this.props.onChange(event.target.value);
    }

    render() {
        return (
            <div>

                <div className="header">
                    <h1>{this.props.name}'s To Do List</h1>
                </div>

                <div className="body">
                    <h2>What is your name?</h2>

                    <input type="text" placeholder="My First Name"
                        name="name" onInput={this.handleChange}>
                    </input>
                    <button onClick={this.handleSubmit}
                        className="btn">Submit</button>

                </div>
            </div>
        )
    }
}
export default Intro;
