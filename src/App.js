import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
let config = {
  apiKey: "AIzaSyCRsfG6PU2w3nqIQDov0MYO-4nYsAb7FvI",
  authDomain: "fir-politic.firebaseapp.com",
  databaseURL: "https://fir-politic.firebaseio.com",
  projectId: "fir-politic",
  storageBucket: "fir-politic.appspot.com",
  messagingSenderId: "212092087992"
};
firebase.initializeApp(config);
let db = firebase;


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      political: [
        { name: '', nickname: '', party: '', age: '' }
      ],
    }
    let political = db.database().ref("politician")
    political.on('value', snapshot => {
      snapshot.forEach(childSnapshot => {
        let childKey = childSnapshot.key
        let childValue = childSnapshot.val()
        console.log(childKey)
        console.log(childValue)

        this.setState({
          political: [childValue]
        })
      })
    })}



  // componentDidMount() {
  //   
  // }

  render() {
        let political = this.state.political

    let politicInfo = political.map((member) =>
          <li><b>Name:</b> {member.name}  <b>Nickname:</b> {member.nickname}  <b>Party:</b> {member.party} <b>Age:</b> {member.age}</li>
        )
    return(
      <div>
      <h3>Political People: </h3>
        { politicInfo }
      </div >
    );
  }
}

export default App;
