import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
    // backgroundColor: colors.whiteColor,
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.whiteColor,
    paddingVertical: moderateVerticalScale(24),
    paddingHorizontal: moderateScale(16),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.4,
    elevation: 12, //most write for android
  },
  headerTxt: {
    textTransform: 'uppercase',
    fontSize: scale(18),
    color: colors.themeColor,
    fontWeight: fonts.fontWeight700,
  },

  bellIconImg: {
    tintColor: colors.themeColor,
    width: moderateScale(25),
    height: moderateScale(25),
  },
  flatListContainer: {
    flex: 1,
    marginTop: moderateVerticalScale(12),
    marginHorizontal: moderateScale(16),
  },
  flatStyle: {
    backgroundColor: colors.whiteColor,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.4,
    elevation: 3,
    borderRadius: moderateScale(4),
    padding: moderateScale(16),
  },
  flatListView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flatListDateTxt: {
    fontSize: scale(16),
    color: colors.blackColor,
  },
  flatListNameTxt: {
    fontSize: scale(18),
    fontWeight: fonts.fontWeight600,
    color: colors.blackColor,
    marginTop: moderateVerticalScale(10),
  },
  flatListAddView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    width: moderateScale(12),
    height: moderateScale(12),
    tintColor: colors.blackOpacity50,
  },
  flatListAddTxt: {
    color: colors.blackOpacity50,
    fontSize: scale(12),
  },
  imgStyle: {
    width: moderateScale(64),
    height: moderateScale(64),
    borderRadius: moderateScale(30),
  },
  priceLabelTxt: {
    color: colors.blackOpacity80,
    fontSize: scale(12),
    textTransform: 'uppercase',
  },
  priceTxt: {
    color: colors.blackColor,
    fontWeight: fonts.fontWeight700,
    fontSize: scale(14),
  },
  btnView: {
    gap: moderateScale(10),
  },
});

export default styles;
