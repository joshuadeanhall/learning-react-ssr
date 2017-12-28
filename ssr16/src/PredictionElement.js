import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class PredictionElement extends Component {
  render() {
      console.log('Rending PredictionElement.js');
    return (
      <tr>
          <td>{this.props.date}</td>
          <td>{this.props.value}</td>
      </tr>
    );
  }
}

export default PredictionElement;
