import {Image, Text, View} from 'react-native';
import React from 'react';
import HeaderComp from '../../components/HeaderComp';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './style';
import ButtonComp from '../../components/ButtonComp';
import navigationString from '../../constants/navigationString';

const ChooseAccount = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.HeaderComp}>
        <HeaderComp />
      </View>

      <View style={styles.container}>
        <View>
          <Text style={styles.headingTxt}>Choose your account type</Text>
        </View>

        <View style={styles.imgContainer}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/619/619032.png',
            }}
            style={styles.imgStyle}
          />
          <Text style={styles.imgTxt}>Agency</Text>
        </View>

        <View style={styles.imgContainer}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/3001/3001764.png',
            }}
            style={styles.imgStyle}
          />
          <Text style={styles.imgTxt}>Freelancer</Text>
        </View>

        <ButtonComp
          btnTxt="Continue"
          btnStyle={{width: '100%'}}
          onPress={() => navigation.navigate(navigationString.REGISTER)}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChooseAccount;
