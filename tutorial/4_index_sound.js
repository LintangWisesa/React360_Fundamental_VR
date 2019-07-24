
import React from 'react';
import {
  asset,
  AppRegistry,
  StyleSheet,
  View,
  Image,
  VrButton,
  NativeModules,
  Text
} from 'react-360';
const {AudioModule} = NativeModules;

export default class react360_notes extends React.Component {
  
  suara = () => {
    AudioModule.playOneShot({
      source: asset('Doraemon.mp3'),
      volume: 1, // volume
    })
  }

  render() {
    return (
      <View style={styles.panel}>
        <VrButton
        style={styles.greetingBox}
        onClick={this.suara}
        >
          <Text style={styles.greeting}>
            Click
          </Text>
        </VrButton>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('react360_notes', () => react360_notes);