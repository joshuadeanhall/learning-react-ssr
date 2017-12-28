import React, { Component } from 'react';
import './App.css';
import HistoricalDataElement from "./HistoricalDataElement";

class HistoricalData extends Component {
  render() {
      const styles = {
          client: {
              backgroundColor: 'green'
          }
      };
      if(!this.props.historicalData) {return <div></div>;}
      let elements = this.props.historicalData.map((data) => <HistoricalDataElement data={data}/>);
    return (
      <div style={styles.client}>
          <ul>
              {elements}
          </ul>
      </div>
    );
  }
}

export default HistoricalData;
