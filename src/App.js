import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
let config = {
  apiKey: " ",
  authDomain: "fir-politic.firebaseapp.com",
  databaseURL: "https://fir-politic.firebaseio.com",
  projectId: " ",
  storageBucket: " ",
  messagingSenderId: " "
};
firebase.initializeApp(config);
let db = firebase;


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      political: Array(
        { name: '', nickname: '', party: '', age: '' }
      ),
    }

    //Fetching From Database
    let political = db.database().ref("politician")
    political.on('value', snapshot => {
      snapshot.forEach(() => {
        this.setState({
          political: snapshot.val()     //Set value to state
        })
      })
    })

    //Console Check
    console.log('This state value are')
    console.log(this.state.political)
  }

  // componentDidMount() {
  // }

  render() {
    //Prepare to show
    let political = this.state.political
    let politicInfo = political.map((member) =>
      <tr >
        <td>{member.name} </td> 
        <td>{member.nickname} </td> 
        <td>{member.party}</td>  
        <td>{member.age}</td>
        </tr>
    )
    //Showing
    return (
      <div className="container">
      <br/>
        <h3>Politicain People in Thailand Election 2019</h3>
        <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Nickname</th>
            <th>Party</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>{politicInfo}</tbody>
        </table>
        <p>React x Firebase Realtime Database Assignment 1 | Lastest Update <span classname="text-primary">7 April 2019</span> | For Education not for politic<br/>
        <b>Theethawat Savastham 5910110150 </b> Source Code : <a href="https://github.com/theethawat/reactxfirebase1">GitHub</a>
        </p>
        <p>Thank you <a href="https://firebase.google.com/docs/web/setup?authuser=0">firebase Documents</a> , <a href="https://medium.com/equinox-blog/%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B9%83%E0%B8%8A%E0%B9%89-react-firebase-realtime-database-%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%96%E0%B8%AD%E0%B8%B0-30b134b905a8">Equinox Blog</a> , <a href="https://stackoverflow.com/questions/30142361/react-js-uncaught-typeerror-this-props-data-map-is-not-a-function">Stack Overflow</a> </p>
      </div >
    );
  }
}

export default App;
