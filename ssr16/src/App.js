import React, { Component } from 'react';
import './App.css';
import fetch from "isomorphic-fetch";
import PredictionApp from "./PredictionApp";

class App extends Component {

    componentDidMount() {
        fetch('https://api.coindesk.com/v1/bpi/historical/close.json')
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then((data) => {
                let historicalDataKeys = Object.keys(data.bpi);
                 let historicalData = historicalDataKeys.map((key) => ({
                     'date': key,
                     'value': data.bpi[key]
                 }));
                this.setState({
                    historicalValue: historicalData
                });
                console.log(historicalData);
            });
        this.log('Component Did Mount')
    }

    constructor() {
        super();
        this.state = {historicalValue:[]};
    }

    componentWillMount() {
        this.log('Component Will Mount')
    }

    log(message) {
        console.log('App.js ' + message);
    }
  render() {
      console.log('Rending app.js');
    return (
      <div className="App">
          <PredictionApp historicalData={this.state.historicalValue}/>
      </div>
    );
  }
}

export default App;
