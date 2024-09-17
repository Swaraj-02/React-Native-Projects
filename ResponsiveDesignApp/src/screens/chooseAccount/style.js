import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  HeaderComp: {
    paddingHorizontal: moderateScale(24),
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(24),
    paddingBottom: moderateScale(24),
    alignItems: 'center',
  },
  headingTxt: {
    fontSize: scale(24),
    color: colors.blackColor,
    fontWeight: fonts.fontWeight700,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  imgContainer: {
    alignItems: 'center',
  },
  imgStyle: {
    height: moderateVerticalScale(110),
    width: moderateScale(110),
  },
  imgTxt: {
    fontSize: scale(20),
    fontWeight: fonts.fontWeight500,
    color: colors.blackColor,
    marginTop: moderateScale(15),
  },
});

export default styles;
