import React, { Component } from 'react';
import './App.css';
import Intro from "./components/intro";
import List from "./components/list";

class App extends Component {
    constructor() {
        super()
        // Added state initializing here
        this.state = { isSubmitted: false, name: '' };
    }

    onSubmit = () => {
        this.setState({
            isSubmitted: true
        })
    }

    onChange = (name) => {
        this.setState({
            name: name
        })
    }

    render() {
        if (this.state.isSubmitted === false) {
            return <Intro name={this.state.name} onSubmit={this.onSubmit} onChange={this.onChange} />
        } else if (this.state.isSubmitted === true) {
            return <List name={this.state.name} />
        }
    }
}

export default App;
