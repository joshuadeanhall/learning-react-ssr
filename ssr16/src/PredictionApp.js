import React, { Component } from 'react';
import './App.css';
import Prediction from './Prediction';
import HistoricalData from './HistoricalData';
import FuturePredictions from './FuturePredictions';

class PredictionApp extends Component {

    componentDidMount() {
        this.log('Component Did Mount');
        let predictionsStorage = localStorage.getItem('predictions');
        var predictions;
        if(predictionsStorage==null) {
            predictions=[];
        } else {
            predictions = JSON.parse(predictionsStorage);
        }
        this.setState({
            predictionData: predictions
        });
    }

    componentWillMount() {
        this.log('Component Will Mount')
    }

    log(message) {
        console.log('PredictionApp.js ' + message);
    }

    constructor() {
        super();
        this.state = {predictionData: []};
    }
  render() {
      console.log('Rending PredictionApp.js');
      var predictions = [];
      if(this.props.predictions) {
          predictions = this.props.predictions.map((pred) => <Prediction date={pred.date} value={pred.value}/>);
      }
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">Welcome to Bitcoin Price Predictions.</h1>
        </header>
          <div className="container">
              <div className="row">
                  <div className="col-md-4">
                      Historical Data
                  </div>
                  <div className="col-md-8">
                      Predictions
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-4">
                    <HistoricalData historicalData={this.props.historicalData} />
                  </div>
                  <FuturePredictions />
              </div>
          </div>
      </div>
    );
  }
}

export default PredictionApp;
