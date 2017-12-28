import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import Prediction from './Prediction';
import HistoricalData from './HistoricalData';
import fetch from "isomorphic-fetch";
import PredictionApp from "./PredictionApp";
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

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
      var extraComponent = <SecondComponent/>;
      var thirdComponent;
      if(this.props.showExtra) {
          thirdComponent = <ThirdComponent/>;
          extraComponent = null;
      }

      var predictions = [];
      if(this.props.predictions) {
          predictions = this.props.predictions.map((pred) => <Prediction date={pred.date} value={pred.value}/>);
      }
    return (
      <div className="App">
          <PredictionApp historicalData={this.state.historicalValue}/>
      </div>
    );
  }
}

export default App;
