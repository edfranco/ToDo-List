import React, { Component } from 'react';
import './App.css';
import Intro from "./components/intro";
import List from "./components/list";

class App extends Component {
  
handleSubmit = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })

    this.state.isSubmitted = true;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value + "'s "
    })
  }

  
  
  render() {
    
    if (this.state.isSubmitted === false) {
      return <Intro />
    } else if (this.state.isSubmitted === true) {
      return <List />
    }
    
    
  }
}

export default App;
