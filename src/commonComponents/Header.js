import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {colors} from '../config/theme';

import {CommonActions} from '@react-navigation/native';

export default ({heading, backBtn = false, onPress = () => {}}) => (
  <View style={styles.headerBar}>
    {backBtn ? (
      <TouchableOpacity
        onPress={() => {
          onPress();
        }}
        style={styles.backImgContainer}>
        <Image
          source={require('../../assets/img/icons/keyboard-left-arrow-button.png')}
          style={styles.backIconImg}
        />
      </TouchableOpacity>
    ) : (
      <View style={{width: 35}} />
    )}
    <View style={styles.headingContainer}>
      <Text style={styles.headingTxt}>{heading}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  headerBar: {
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  headingContainer: {justifyContent: 'center', flex: 1, alignItems: 'center'},
  headingTxt: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 25,
  },
  backIconImg: {flex: 1, width: null, height: null, resizeMode: 'cover'},
  backImgContainer: {width: 25, height: 25, marginLeft: 10},
});
