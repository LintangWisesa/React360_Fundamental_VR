import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';

export default class react360_notes extends React.Component {
  
  state = {
    data: 'data'
  }

  getApi = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/10')
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({data: json.id + ' ' + json.title})
    })
  };

  render() {
    return (
      <View style={styles.panel}>
        <VrButton
          onClick={this.getApi}
          style={styles.greetingBox}>
          <Text style={styles.greeting}>
            {this.state.data}
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
    alignItems: 'center',
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
