import React, { Component } from 'react';
import { View } from 'react-native';
import NewDeck from './components/NewDeck';

export default class App extends Component {
  render() {
    return (
      <View >
        <NewDeck />
      </View>
    );
  }
}