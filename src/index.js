/* @flow */

import React from 'react';

import { StyleSheet, View, StatusBar } from 'react-native';

import Banner from './Banner';
import Body from './Body';
import Footer from './Footer';

class MainScreen extends React.Component<{}> {
  render() {
    return (
      <View style={styles.flex}>
        <View style={styles.flex}>
          <StatusBar backgroundColor="blue" barStyle="light-content" />
          <Banner />
          <Body />
        </View>
        <Footer />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
export default MainScreen;
