import React, { Component } from 'react';
import { View } from 'react-native';
//
import firebase from 'firebase';
//
import { Header } from './components/common';
import LoginForm from './components/LoginForm';
//
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyAdZgzHD8PNSQIT4L0Xe53nGYNudJ1R5MU",
      authDomain: "auth-cd9b3.firebaseapp.com",
      databaseURL: "https://auth-cd9b3.firebaseio.com",
      projectId: "auth-cd9b3",
      storageBucket: "auth-cd9b3.appspot.com",
      messagingSenderId: "566092762511"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View>
        <Header headerText={"Auth"} />
        <LoginForm></LoginForm>
      </View>
    );
  }
}
