import React, { Component } from 'react';
import './App.css';

class HistoricalDataElement extends Component {
  render() {
    return (
        <tr>
          <td>{this.props.data.date}</td>
          <td>{this.props.data.value}</td>
        </tr>
    );
  }
}

export default HistoricalDataElement;
