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
  imgView: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    height: moderateScale(120),
    width: moderateScale(120),
  },
  headingView: {
    flex: 0.4,
    alignItems: 'center',
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
  inputView: {
    flex: 0.4,
    marginBottom: moderateVerticalScale(75),
  },
  customInputStyle: {
    // marginBottom: moderateVerticalScale(75),
    marginBottom: moderateVerticalScale(35), // when keboard height dynamic remove TODO:
  },
  btnStyle: {
    textTransform: 'uppercase',
  },
});

export default styles;
