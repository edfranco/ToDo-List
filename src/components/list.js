import React, { Component } from 'react';

class List extends Component {
    render() {
        return(
            <div className="App">
                <div className="header">
                    <h1>{this.state.name} To Do List</h1>
                </div>
            </div>
        )
    }
}

export default List;