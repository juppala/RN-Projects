/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    //Toggle the state every second
    setInterval(() => {
      this.setState({
        showText: !this.state.showText
      });
    }, 100);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>
        {display}
      </Text>
    )
  }
}

class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink: line1' />
        <Blink text='I love to blink: line2' />
        <Blink text='I love to blink: line3' />
        <Blink text='I love to blink: line4' />
      </View>
    );
  }
}

AppRegistry.registerComponent('BlinkApp', () => BlinkApp);
