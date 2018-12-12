import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, Button, View, Alert, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true};

    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}

export default class LotsOfStyles extends Component {

  constructor(props){
    super(props);
    this.state = {chng: ''};
  }

  render() {
    return (
      <View style={{flex:1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}}>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
        <Blink text="This Should Blink" />
        </View>
        <View style={{flex: 2, backgroundColor: 'steelblue'}}>
          <TextInput style={{height: 40}} placeHolder="Enter your text here" onChangeText={(chng) => this.setState({chng})}/>
          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.chng.split(' ').map((word) => word && '🍕').join(' ')}
          </Text>
          <Button
            onPress={() => {
              Alert.alert('You tapped the button!');
            }}
            title="Press Me"
          />
          <TouchableHighlight onPress={this._onPressButton} onLongPress={() => {
              Alert.alert('You long Tapped the button!');
            }} underlayColor="white">
            <View style={styles.button}>
              <Text style={styles.buttonText}>Touchable with Long Press</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('Taxi_App', () => Bananas);