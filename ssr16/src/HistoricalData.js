import React, { Component } from 'react';
import './App.css';
import HistoricalDataElement from "./HistoricalDataElement";

class HistoricalData extends Component {
  render() {
      const styles = {
          client: {
              backgroundColor: 'green'
          },
          table: {
              textAlign: 'left'
          }
      };
      if(!this.props.historicalData) {return <div></div>;}
      let elements = this.props.historicalData.map((data) => <HistoricalDataElement data={data}/>);
    return (
      <div style={styles.client}>
          <table className="table" style={styles.table}>
              <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Value</th>
                </tr>
              </thead>
              <tbody>
                {elements}
              </tbody>
          </table>
      </div>
    );
  }
}

export default HistoricalData;
