import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';
import {
  moderateVerticalScale,
  moderateScale,
  scale,
} from 'react-native-size-matters';
import imgPath from '../constants/imgPath';

const TextInputWithLabel = ({
  label,
  placeHolder,
  onChangeText = () => {},
  inputStyle = {},
  ...props
}) => {
  //
  return (
    // adding the style for custom TextInput
    <View style={{...styles.inputField, ...inputStyle}}>
      <Text style={styles.labelTxt}>{label}</Text>
      <TextInput placeholder={placeHolder} style={styles.inputTxt} {...props} />
      {/* <Image source={imgPath.hideEye} />  */}
      {/* Working on show and hide eye in PW TODO  */}
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    borderBottomColor: 'rgba(0,0,0,0.6)',
    borderBottomWidth: 1,
    borderRadius: moderateScale(4),
  },
  labelTxt: {
    color: 'rgba(0,0,0,0.5)',
    fontSize: scale(14),
    paddingHorizontal: moderateScale(4),
  },
  inputTxt: {
    paddingVertical: moderateVerticalScale(8),
    color: 'rgba(0,0,0,0.8)',
    fontSize: 16,
  },
});

export default TextInputWithLabel;
