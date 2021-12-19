import React, { Component } from 'react'

class Hello extends Component {

    state={
        message:"Welcome to our website"
    }

    render() { 
        return (
            <h1>
             {this.props.name}
             {this.state.message}
            </h1>
        );
        
    }
}
 
export default Hello;