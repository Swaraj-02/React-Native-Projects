import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import imgPath from '../constants/imgPath';
import {useNavigation} from '@react-navigation/native';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import colors from '../styles/colors';

const HeaderComp = ({onPressBack}) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={!!onPressBack ? onPressBack : () => goBack()}>
        <Image source={imgPath.arrowBack} style={styles.imgStyle} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComp;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: moderateScale(42),
  },
  imgStyle: {
    height: verticalScale(20),
    width: moderateScale(20),
    tintColor: colors.blackColor,
  },
});
