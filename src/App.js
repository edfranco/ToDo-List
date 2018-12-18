import React, { Component } from 'react';
import './App.css';
import Intro from "./components/intro";
import List from "./components/list";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      isSubmitted: false
    }
  }

  

  handleSubmit = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })

    this.state.isSubmitted = true;
  }
/*
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value + "'s"
    })
  }
  */
  
  render() {
    
    if (this.state.isSubmitted === false) {
      return <Intro />
    } 
    return <List />
    
  }
}

export default App;
