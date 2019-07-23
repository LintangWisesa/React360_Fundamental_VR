import React from 'react';
import {
  asset,
  AppRegistry,
  StyleSheet,
  View,
  Image
} from 'react-360';

export default class react360_notes extends React.Component {
  
  render() {
    return (
      <View style={styles.panel}>
        <Image
          style={styles.greetingBox}
          source={{uri: 'https://4.bp.blogspot.com/-f7YxPyqHAzY/WJ6VnkvE0SI/AAAAAAAADTQ/0tDQPTrVrtMAFT-q-1-3ktUQT5Il9FGdQCLcB/s350/simpLINnovation1a.png'}} 
        />
        <Image 
          style={styles.greetingBox2}
          source={asset('lintang.png')}   // image from static_assets, import asset from react!
        />
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
    flex: 1, flexDirection: 'row'
  },
  greetingBox: {
    width: 400,
    height: 100
  },
  greetingBox2: {
    width: 300,
    height: 300
  },
});

AppRegistry.registerComponent('react360_notes', () => react360_notes);