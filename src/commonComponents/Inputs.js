import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import {colors} from '../config/theme';

export const InputText = ({
  value,
  onChangeText,
  errorFlag,
  errorText,
  placeholder,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
}) => (
  <View style={[styles.containerMargin]}>
    <TextInput
      style={[styles.textInput, errorFlag && styles.redB]}
      placeholder={placeholder}
      placeholderTextColor="#B3B3B3"
      onChangeText={text => onChangeText(text)}
      keyboardType={keyboardType}
      value={value}
      autoCapitalize={autoCapitalize}
    />
    {errorFlag && <Text style={{color: 'red'}}>{errorText}</Text>}
  </View>
);

const styles = StyleSheet.create({
  textInput: {
    color: colors.black,
    height: 40,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 10,
    textAlignVertical: 'top',
    marginBottom: 0,
    paddingRight: 10,
  },
  containerMargin: {marginBottom: 10},
  alertRed: {borderColor: 'red'},
  alertTxtRed: {color: 'red'},
  greyBack: {backgroundColor: 'rgba(166,166,166,0.2)'},
  textViewMobile: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 10,
  },
  center: {justifyContent: 'center'},
  nineOne: {color: '#B3B3B3', marginLeft: 10},
  flex: {flex: 1},
  redB: {borderColor: 'red', color: 'red'},
});
