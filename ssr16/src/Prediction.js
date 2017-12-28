import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PredictionElement from './PredictionElement'

class Prediction extends Component {
  render() {
      console.log('Rending Prediction.js');
    return (
      <div className="CustomComponent">
            <PredictionElement date={this.props.date} value={this.props.value} />
      </div>
    );
  }
}

export default Prediction;
