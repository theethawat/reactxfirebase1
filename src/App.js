import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      idol: []
    }
  }

  componentDidMount() {
    this.setState({
      idol:['mobile','bnk48','b3'],
    })
  }

  render() {
    return (
      <div>
        <h3>Idol: {this.state.idol}</h3>
      </div>
    );
  }
}

export default App;
