/* eslint-disable react/no-unstable-nested-components */
import {FlatList, Image, Text, View} from 'react-native';
import React from 'react';
import userData from './userDummyData';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './style';
import colors from '../../styles/colors';
import imgPath from '../../constants/imgPath';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import ButtonComp from '../../components/ButtonComp';

const Home = () => {
  //- For FlatList -->
  const renderItem = ({item}) => {
    return (
      <View style={styles.flatStyle}>
        <View style={styles.flatListView}>
          <View>
            <Text style={styles.flatListDateTxt}>{item?.date}</Text>
            <Text style={styles.flatListNameTxt}>{item?.name}</Text>
            <View style={styles.flatListAddView}>
              <Image
                style={styles.locationIcon}
                source={imgPath.locationIcon}
              />
              <Text style={styles.flatListAddTxt}>{item?.address}</Text>
            </View>
          </View>
          <Image style={styles.imgStyle} source={{uri: item?.image}} />
        </View>
        <View
          style={[
            styles.flatListView,
            {marginVertical: moderateVerticalScale(10)},
          ]}>
          <Text style={styles.priceLabelTxt}>Price</Text>
          <Text style={styles.priceTxt}>{item?.price}</Text>
        </View>

        <View style={[styles.flatListView, styles.btnView]}>
          <View style={{flex: 1}}>
            <ButtonComp
              btnStyle={{
                backgroundColor: colors.whiteColor,
                borderWidth: moderateScale(2),
                borderColor: colors.themeColor,
              }}
              btnTxtStyle={{
                color: colors.themeColor,
              }}
              btnTxt="Reject"
            />
          </View>
          <View style={{flex: 1}}>
            <ButtonComp btnTxt="Accept" />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView}>
        {/*  */}
        <View style={styles.headerView}>
          <Text />
          {/* - blank text for center header Txt */}
          <Text style={styles.headerTxt}>Nanny Line</Text>
          <Image style={styles.bellIconImg} source={imgPath.bellIcon} />
        </View>

        <View style={styles.flatListContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={userData}
            renderItem={renderItem}
            ItemSeparatorComponent={() => (
              <View style={{marginBottom: moderateVerticalScale(12)}} />
            )}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
