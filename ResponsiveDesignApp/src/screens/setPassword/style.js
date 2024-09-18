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
  headingView: {
    alignItems: 'center',
    marginTop: moderateVerticalScale(54),
  },
  headingTxt: {
    fontSize: scale(24),
    fontWeight: fonts.fontWeight700,
    color: colors.blackColor,
  },
  subHeadingTxt: {
    fontSize: scale(14),
    color: colors.blackColor,
    textAlign: 'center',
    marginTop: moderateVerticalScale(12),
  },
  mobTxt: {
    fontWeight: fonts.fontWeight700,
  },
  btnStyle: {
    width: moderateScale(56),
    height: moderateScale(56),
    borderRadius: moderateScale(56 / 2),
    alignSelf: 'flex-end',
  },
});

export default styles;
