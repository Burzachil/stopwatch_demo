import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      started: false,
      timePassed: 0,
      milliseconds: '00',
      seconds: '00',
      minutes: '00',      
      history: []
    }
  }

  formatter = (input) => {
    const time = input.toString();
    return time.length < 2 ? '0' + time : time.slice(-2);
  }

  formatTime = () => {
    this.setState({
      milliseconds: this.formatter(this.state.timePassed),
      seconds: this.formatter(Math.floor((this.state.timePassed / 100) % 60)),
      minutes: this.formatter(Math.floor((this.state.timePassed / (100 * 60)) % 60))
    });
  }

  timeNow = () => {
    let seconds = parseInt(this.state.timePassed, 10) + 1;
    this.setState({ timePassed: seconds });
    this.formatTime();
  }

  resetTime = () => {
    window.clearInterval(this.interval);
    this.setState({
      started: false,
      timePassed: 0,
      milliseconds: '00',
      seconds: '00',
      minutes: '00',
      history: []
    });
  }

  startTime = () => {
    if(this.state.started === true){ return; }
    this.interval = setInterval(this.timeNow, 10);
    this.setState({ started: true  });
  }

  stopTime = () => {
    if (this.state.started !== false) {
      window.clearInterval(this.interval);
      this.setState({ 
        started: false,
        history: this.state.history.concat(`${this.state.minutes}:${this.state.seconds}:${this.state.milliseconds}`),
        timePassed: 0,
        milliseconds: '00',
        seconds: '00',
        minutes: '00'
      });
    }    
  }

  render(){
    return (
      <div className="stopwatch">
        <div className="stopwatch__screen">
          {this.state.minutes}<span className="stopwatch__colon">:</span>
          {this.state.seconds}<span className="stopwatch__colon">:</span>
          {this.state.milliseconds}</div>
        <div className="container">
          <div className="stopwatch__button" onClick={ this.startTime }>Start</div>
          <div className="stopwatch__button" onClick={ this.stopTime }>Stop</div>
          <div className="stopwatch__button" onClick={ this.resetTime }>Reset</div>
        </div>
    {this.state.history.map(function(el) {return <span className="stopwatch__history">{el}</span>})}       
      </div>
    )
  };
}

export default App;
