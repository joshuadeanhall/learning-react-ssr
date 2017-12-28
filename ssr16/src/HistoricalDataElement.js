import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class HistoricalDataElement extends Component {
  render() {
    return (
      <li>{this.props.data.date} - {this.props.data.value}</li>
    );
  }
}

export default HistoricalDataElement;
