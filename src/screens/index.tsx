import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Colors } from 'src/constants';
import { Player } from './Player';
import AppNavigator from './AppNavigator';
import { initialWindowMetrics } from 'react-native-safe-area-context';

export const Screens = () => {
  return (
    <View style={styles.container}>
      <AppNavigator />
      <Player />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: initialWindowMetrics?.insets.top ?? 0,
  },
});
