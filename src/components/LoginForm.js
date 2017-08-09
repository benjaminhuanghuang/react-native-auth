import React, { Component } from 'react';
//
import { Button, Card, CardSection, Input } from './common';

//
class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input value={this.state.email} label="Email:" placeholder="user@email"
            onChangeText={text => this.setState({ email: text })} />
        </CardSection>
        <CardSection>
          <Input value={this.state.password} label="Password:" placeholder="password"
            secureTextEntry
            onChangeText={text => this.setState({ password: text })} />
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
  textInput: {
    height: 20,
    width: 100,
  }
}

export default LoginForm;
