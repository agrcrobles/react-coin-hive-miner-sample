/* @flow */

import React from 'react';

import { Platform, StyleSheet, Text, View } from 'react-native';

const Banner = () => (
  <View style={styles.banner}>
    <Text style={styles.title}>React Coin Hive Minner</Text>
    <Text style={styles.subtitle}>
      Mine cryptocurrency while users are idle ⌚
    </Text>
  </View>
);

export default Banner;

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#336699',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 16,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: '#fff',
    margin: 8,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '200',
    color: '#eee',
    margin: 8,
  },
});
