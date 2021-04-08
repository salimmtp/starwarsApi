import React from 'react';
import {View, ActivityIndicator, StyleSheet, Platform} from 'react-native';
import {colors} from '../config/theme';

export const LoadMore = () => (
  <View style={styles.loaderV}>
    <ActivityIndicator
      size={Platform.OS === 'ios' ? 'small' : 30}
      color={colors.blue}
    />
  </View>
);

const styles = StyleSheet.create({
  flex: {flex: 1},
  cFlex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderContainer: {
    flex: 1,
    backgroundColor: '#E6E6E6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderWrp: {
    width: 70,
    height: 70,
    borderRadius: 10,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderV: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
