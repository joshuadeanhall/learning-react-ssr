import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class SecondComponent extends Component {
  render() {

      console.log('Rending SecondComponent.js');
      const styles = {
          client: {
              backgroundColor: 'green'
          }
      };
    return (
      <div style={styles.client}>Hello from second component with other style</div>
    );
  }
}

export default SecondComponent;
