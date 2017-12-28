import React, { Component } from 'react';
import './App.css';
import PredictionElement from './PredictionElement'

class Predictions extends Component {

    constructor(props) {
        super(props);
        this.state = {predictionDate: '', predictionValue: '', futurePredictions: []};

        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        let predictions = this.getPredictions();
        this.setState({
            futurePredictions: predictions
        });
    }

    handleDateChange(event) {
        this.setState({predictionDate: event.target.value});
    }

    handleValueChange(event) {
        this.setState({predictionValue: event.target.value});
    }

    handleSubmit(event) {
        let prediction = {
            date: this.state.predictionDate,
            value: this.state.predictionValue
        };

        let predictions = this.getPredictions();
        predictions.push(prediction);

        this.setState({futurePredictions: predictions});
        localStorage.setItem('predictions', JSON.stringify(predictions));
        event.preventDefault();
    }

    getPredictions() {
        let predictionsStorage = localStorage.getItem('predictions');
        let predictions;
        if(predictionsStorage===null) {
            predictions=[];
        } else {
            predictions = JSON.parse(predictionsStorage);
        }

        return predictions;
    }

    render() {
        const styles = {
            futurePredictionHint: {
                'font-size': '6pt',
            },
            futurePredictions: {
                backgroundColor: 'lightblue'
            },
            table: {
                textAlign: 'left'
            }
        };

        if(!this.state.futurePredictions) {
            return <div></div>
        }

        let predictionElements = this.state.futurePredictions.map((data) => <PredictionElement date={data.date} value={data.value} />)
        return (
            <div className="col-md-8" style={styles.futurePredictions}>
                <form onSubmit={ this.handleSubmit }>
                    <div className="form-row">
                        <div className="col-md-4">
                            <input type="text" className="form-control" placeHolder="Date" value={this.state.predictionDate} onChange={this.handleDateChange} />
                        </div>
                        <div className="col-md-4">
                            <input type="text" className="form-control" placeHolder="Value"  value={this.state.predictionValue} onChange={this.handleValueChange} />
                        </div>
                        <div className="col-md-4">
                            <input type="submit" class="btn btn-primary" value="Predict the future" /><div style={styles.futurePredictionHint}>Hint it should be worth millions!</div>
                        </div>
                    </div>
                </form>
                <table className="table" style={styles.table}>
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {predictionElements}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Predictions;
