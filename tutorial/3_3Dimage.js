// insert on client.js: 3D image from asset!
// r360.renderToLocation(
//   r360.createRoot('Sphere'),
//   r360.getDefaultLocation(),
// );

import React from 'react';
import {
  asset,
  AppRegistry,
  StyleSheet,
  View,
  Image
} from 'react-360';
import Entity from 'Entity';

export default class react360_notes extends React.Component {
  
  render() {
    return (
      <View style={styles.panel}>
        <Entity
          source={{
            // https://sketchfab.com
            gltf2: asset('sphere/scene.gltf'),
          }}
          style={{transform:[
            { translate: [0, 0, 0]},
            { scaleX: 2 },
            { scaleY: 2 },
            { scaleZ: 2 },
            // { rotateX: rotated },
          ]}}
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