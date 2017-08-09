import React, { Component } from 'react';
//
import { Button, Card, CardSection, Input } from './common';

//
class LoginForm extends Component {
  state = {
    text:''
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input value={this.state.text} label="Email" placeholder="user@email"
              onChangeText = {text=>this.setState({text})}>
          </Input>
        </CardSection>
        <CardSection>
          <Input style={styles.textInput}></Input>
        </CardSection>
        <CardSection>
          <Button>
            "Log In"
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  textInput:{
    height: 20,
    width: 100,
  }
}

export default LoginForm;
