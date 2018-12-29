import React, { Component } from 'react';
import './intro.css'

class Intro extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          name: "",
          isSubmitted: false
        }
      }
    
    render() {
        return(
        <div>
            
                <div className="header">
                    <h1>{this.state.name}To Do List</h1>
                </div>
            
                <div className="body">
                    <h2>What is your name?</h2>
            
                    <input type="text" placeholder="My First Name" 
                         name="name" onChange={this.handleChange}>
                    </input>
                    <button onClick={this.handleSubmit} 
                    className="btn">Submit</button>

                </div>
        </div>
        )
    }
}
export default Intro;
