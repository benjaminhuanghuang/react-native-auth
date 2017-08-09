import React, { Component } from 'react';
import { TextInput, Text, View } from 'react-native';

//
const Input = (props) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>{props.label}</Text>
      <TextInput style={styles.textInputStyle} value={props.value} onChangeText={props.onChangeText}></TextInput>
    </View>
  );
}

const styles = {
  textInputStyle: {
    height: 20,
    width: 100,
  },
  labelStyle: {

  },
  containerStyle: {

  }
}

export { Input };