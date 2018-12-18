import React, { Component } from 'react';

class Intro extends Component{
    render() {
        return(
        <div className="App">
            
                <div className="header">
                    <h1>To Do List</h1>
                </div>
            
                <div className="body">
                    <h2>What is your name?</h2>
            
                <form ref="form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="My First Name" 
                         name="name" onChange={this.handleChange}>
                    </input>
                    <button type="submit" className="btn">Submit</button>
                </form>

                </div>
        </div>
        )
    }
}
export default Intro;
