import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import './global';

import Chain3 from 'chain3';

export default class App extends React.Component {
  componentWillMount() {
    const chain3 = new Chain3(
      new Chain3.providers.HttpProvider('http://127.0.0.1:8545')
    );

    chain3.mc.getBlock('latest', (error,response) => {
      if (!error) 
        console.log(response);
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
