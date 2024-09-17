import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  moderateVerticalScale,
  moderateScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import colors from '../styles/colors';

const TextInputWithLabel = ({
  label,
  placeHolder,
  onChangeText = () => {},
  inputStyle = {},
  rightIcon,
  onPressRight,
  ...props
}) => {
  //
  return (
    // adding the style for custom TextInput
    <View style={{...styles.inputField, ...inputStyle}}>
      <Text style={styles.labelTxt}>{label}</Text>
      <View style={styles.textField}>
        <TextInput
          placeholder={placeHolder}
          style={styles.inputTxt}
          {...props}
        />
        {!!rightIcon ? (
          <TouchableOpacity activeOpacity={0.8} onPress={onPressRight}>
            <Image source={rightIcon} style={styles.iconStyle} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    borderBottomColor: colors.blackOpacity50,
    borderBottomWidth: 1,
    borderRadius: moderateScale(4),
  },
  labelTxt: {
    color: colors.blackOpacity50,
    fontSize: scale(14),
    paddingHorizontal: moderateScale(4),
  },
  inputTxt: {
    paddingVertical: moderateVerticalScale(8),
    color: colors.blackOpacity80,
    fontSize: 16,
    flex: 1,
  },
  textField: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconStyle: {
    height: verticalScale(18),
    width: moderateScale(18),
    tintColor: colors.blackOpacity40,
  },
});

export default TextInputWithLabel;
