import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  bgImg: {
    height: verticalScale(200),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginTxt: {
    fontSize: scale(32),
    fontWeight: '700',
    color: colors.whiteColor,
  },
  mainContainer: {
    paddingHorizontal: moderateScale(24),
    paddingTop: verticalScale(44),
  },
  customInputStyle: {
    marginBottom: moderateVerticalScale(28),
  },
  forgotView: {
    alignSelf: 'flex-end',
    marginVertical: moderateVerticalScale(24),
  },
  forgotTxt: {
    color: colors.themeColor,
    fontSize: scale(14),
    fontWeight: fonts.fontWeight500,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateVerticalScale(72),
    marginBottom: moderateVerticalScale(40),
  },
  bottomTxt: {
    color: colors.blackOpacity40,
  },
  bottomJoinNowTxt: {
    color: colors.blackColor,
    fontWeight: fonts.fontWeight500,
  },
});

export default styles;
