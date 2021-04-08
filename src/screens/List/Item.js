import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../config/theme';

export default ({planetName, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress()}>
      <View style={styles.structure}>
        <Text style={styles.planetTxt}>{planetName}</Text>
        <View style={styles.iconImgContainer}>
          <Image
            source={require('../../../assets/img/icons/arrow-pointing-to-right.png')}
            style={styles.iconImg}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
  },
  structure: {flexDirection: 'row', justifyContent: 'space-between'},
  planetTxt: {color: colors.black, fontSize: 16, fontWeight: 'bold'},
  iconImgContainer: {height: 20, width: 20},
  iconImg: {
    flex: 1,
    width: null,
    height: null,
    tintColor: '#68C8B9',
    resizeMode: 'cover',
  },
});
