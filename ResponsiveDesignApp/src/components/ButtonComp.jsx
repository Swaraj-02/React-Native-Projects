import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

const ButtonComp = ({btnTxt, btnStyle = {}, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{...styles.btnStyle, ...btnStyle}}>
      <Text style={styles.btnTxt}>{btnTxt}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  btnStyle: {
    height: moderateScale(48),
    backgroundColor: colors.themeColor,
    borderRadius: moderateScale(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxt: {
    fontSize: scale(12),
    color: colors.whiteColor,
    fontWeight: fonts.fontWeight700,
    textTransform: 'uppercase',
  },
});
