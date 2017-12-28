import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ThirdComponent extends Component {
  render() {

      console.log('Rending ThirdComponent.js');
      const styles = {
        server: {
            backgroundColor: 'red'
        }
      }

    return (
        <div style={styles.server}>Hello from Third Componen I should be red 2 is green</div>
    );
  }
}

export default ThirdComponent;
