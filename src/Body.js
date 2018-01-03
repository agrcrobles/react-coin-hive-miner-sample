/* @flow */

import React from 'react';

import {
  ScrollView,
  Switch,
  TextInput,
  Text,
  View,
  StyleSheet,
} from 'react-native';

import Idle from 'react-idle';
import CoinHive from 'react-coin-hive';

type Props = {};
type State = {
    enableMinning: boolean,
    account: string,
    isMinning: account,
};
export default class Body extends React.Component<Props, State> {
  state = {
    enableMinning: true,
    account: 'jskfuAqIkrQUPU2cXcrzY4W10Tp1d47m',
    isMinning: false,
  };
  timeout: 2000;
  onStart = () => {
    this.setState({
      isMinning: true,
    });
    console.log('started');
  };
  onStop = () => {
    this.setState({
      isMinning: false,
    });
    console.log('stopped');
  };

  render() {
    return (
      <ScrollView>
        <Text style={[styles.description]}>Account</Text>
        <TextInput
          style={styles.input}
          placeholder="Account to mine"
          value={this.state.account}
          onChangeText={account => this.setState({ account })}
        />
        <Text style={[styles.description]}>Is minning?</Text>
        <Switch
          disabled={true}
          style={styles.switch}
          value={!!this.state.isMinning}
        />
        <CoinHive
        onStart={this.onStart}
        onStop={this.onStop}
        siteKey={this.state.account}
        timeout={this.timeout}
        />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  body: {
      flex: 1,
  },
  switch: { marginVertical: 9, marginHorizontal: 12 },
  description: {
    paddingHorizontal: 12,
    paddingVertical: 9,
    backgroundColor: '#4A148C',
    color: 'white',
    fontSize: 12,
  },
  input: { padding: 9, fontSize: 11 },

  text: {},
});
