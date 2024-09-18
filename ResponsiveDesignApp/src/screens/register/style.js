import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(24),
    paddingBottom: moderateScale(24),
  },
  nameView: {
    flexDirection: 'row',
    gap: moderateScale(8),
  },
  nameInputStyle: {
    flex: 1,
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateVerticalScale(28),
  },
  checkBoxIcon: {
    height: moderateScale(25),
    width: moderateScale(25),
    tintColor: colors.themeColor,
  },
  bottomTxt: {
    alignItems: 'center',
    flexShrink: 1,
  },
  termsTxt: {
    color: colors.blackColor,
    fontWeight: fonts.fontWeight600,
  },
});

export default styles;
