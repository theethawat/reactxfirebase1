import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      political: [
        {name:'',nickname:'',party:''}
      ],
    }
  }

  componentDidMount() {
    this.setState({
      political: [
        {name: 'Abhisit', nickname: 'Mark', party: 'Democrat'},
        {name:'Sudarat',nickname:'Nhoi',party:'PhuerThai'}
      ]
    })
  }

  render() {
  let political = this.state.political
  let politicInfo = political.map((member) => 
    <li>Name: {member.name}  Nickname: {member.nickname}  Party: {member.party}</li>
    )
    return (
      <div>
        <h3>Political People: {politicInfo} </h3>
      </div>
    );
  }
}

export default App;
