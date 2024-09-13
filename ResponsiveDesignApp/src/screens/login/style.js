import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: '#FFFFFF',
  },
  mainContainer: {
    paddingHorizontal: moderateScale(24),
    paddingVertical: verticalScale(44),
  },
  customInputStyle: {
    marginBottom: moderateVerticalScale(28),
  },
});

export default styles;
