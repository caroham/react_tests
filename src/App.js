import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Test from './components/test.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      time: "10",
    };
    this.getTime = this.getTime.bind(this);
  }

  componentDidMount() {
    let interval = setInterval(this.getTime, 1000);
  }


  getTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    let seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    let ap = (hour >= 12) ? "PM" : "AM";
    if(hour === 0) {
      hour = "12";
    }
    let timeStr = hour + ":" + min + ":" + seconds + " " + ap;
    this.setState({time: timeStr});

  }

  render() {
    return (
      <div>
        <h1> The time is: <span id="datetime">{this.state.time}</span></h1>
        <Test/>
      </div>
    );
  }
}

export default App;
