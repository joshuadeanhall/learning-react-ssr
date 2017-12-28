import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class PredictionElement extends Component {
  render() {
      console.log('Rending PredictionElement.js');
    return (
      <div className="CustomComponent">
        <p className="App-intro">
            <span>{this.props.date}</span> <span>{this.props.value}</span>
        </p>
      </div>
    );
  }
}

export default PredictionElement;
