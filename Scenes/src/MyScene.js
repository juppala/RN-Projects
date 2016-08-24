import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default class MyScene extends Component {
  static get defaultProps() {
    return {
      title: PropTypes.string.isRequired,
      onForward: PropTypes.func.isRequired,
      onBack: PropTypes.func.isRequired
    };
  }

  render() {
    return (
      <View style={styles.MyScene}>
        <Text>Current Scene: {this.props.title}</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>
            Tap me to load the next scene
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>
            Tap me to go back
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  MyScene: {
    marginTop: 20,
    marginLeft: 10
  }
});
