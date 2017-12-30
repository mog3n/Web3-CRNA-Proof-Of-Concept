import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const Web3 = require('web3');

export default class App extends React.Component {

  constructor() {
    super();
  }

  componentDidMount() {
    const https_node = "https://mainnet.infura.io";
    const web3 = new Web3();
    web3.setProvider(new web3.providers.HttpProvider(https_node));

    web3.eth.getBalance('0x8Ca4394B705E2eD7614A16ffb68dB58EC9f4aACc', (err, res) => {
      console.log(res);
    });
  }


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
