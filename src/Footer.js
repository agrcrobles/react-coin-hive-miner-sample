/* @flow */

import React from 'react';

import {TouchableHighlight, Image, Platform, StyleSheet, Text, View } from 'react-native';

const Footer = () => (
  <View>
  <View style={styles.container}>
    <TouchableHighlight onPress={() => window.open("https://github.com/agrcrobles/react-coin-hive-minner-sample")}>
      <Image source={{uri: 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png'}} style={{width: 66, height: 58}}/>
    </TouchableHighlight>
  </View>
  <View style={styles.footer}>
    <Text style={styles.disclaimer}>
      It is your responsibility to inform your visitors if you are running this
      code and allow them to opt out! Cryptocurrency mining may be considered
      malware if done without user consent.
    </Text>
  </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  footer: {
    alignItems: 'center',
    backgroundColor: '#333',
    paddingVertical: 20,
    paddingHorizontal: 5,
  },
  disclaimer: {
    color: 'white',
    fontSize: 11,
  },
});

export default Footer;
