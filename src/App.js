import React, { Component } from 'react';
import { View } from 'react-native';
//
import firebase from 'firebase';
//
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';
//
export default class App extends Component {
  state = {
    loggedIn: null,
  }
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

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      }
      else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
           <CardSection>
            <Button onPress={()=>{firebase.auth().signOut()}}> Log out </Button>
           </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large'/>
    }
    
  }
  render() {
    return (
      <View>
        <Header headerText={"Auth"} />
        {this.renderContent()}
      </View>
    );
  }
}
 