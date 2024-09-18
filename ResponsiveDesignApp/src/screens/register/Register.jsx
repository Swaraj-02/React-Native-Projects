import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import HeaderComp from '../../components/HeaderComp';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './style';
import ButtonComp from '../../components/ButtonComp';
import navigationString from '../../constants/navigationString';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import imgPath from '../../constants/imgPath';

const Register = ({navigation}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <HeaderComp />
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* -- Input Fields -- */}
          <View style={styles.nameView}>
            <TextInputWithLabel
              label="First Name"
              placeHolder="Please enter your first name"
              inputStyle={styles.nameInputStyle}
            />
            <TextInputWithLabel
              label="Last Name"
              placeHolder="Please enter your last name"
              inputStyle={styles.nameInputStyle}
            />
          </View>

          <TextInputWithLabel
            label="Salon Name"
            placeHolder="Please enter your salon name"
            inputStyle={{marginVertical: moderateVerticalScale(28)}}
          />

          <TextInputWithLabel
            label="Date Of Birth"
            placeHolder="Please enter your DOB"
            inputStyle={{marginBottom: moderateVerticalScale(28)}}
          />

          <TextInputWithLabel
            label="Mobile Number"
            placeHolder="Please enter your mobile number"
            inputStyle={{marginBottom: moderateVerticalScale(28)}}
          />

          <TextInputWithLabel
            label="Email Address"
            placeHolder="Please enter your email address"
            inputStyle={{marginBottom: moderateVerticalScale(28)}}
            keyboardType="email-address"
          />

          <View
            style={[
              styles.nameView,
              {marginBottom: moderateVerticalScale(28)},
            ]}>
            <TextInputWithLabel
              label="Country"
              placeHolder="Please enter your country name"
              inputStyle={styles.nameInputStyle}
            />
            <TextInputWithLabel
              label="Postal/Zip Code"
              placeHolder="Please enter your pin code"
              inputStyle={styles.nameInputStyle}
            />
          </View>

          <TextInputWithLabel
            label="Address"
            placeHolder="Please enter your address"
            inputStyle={{marginBottom: moderateVerticalScale(28)}}
          />

          <TextInputWithLabel
            label="Referal Code"
            placeHolder="Please enter your referal code"
            inputStyle={{marginBottom: moderateVerticalScale(28)}}
          />

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.bottomView}
            onPress={() => setIsActive(!isActive)}>
            <View style={{marginHorizontal: moderateScale(8)}} onP>
              <Image
                source={
                  isActive ? imgPath.checkboxIcon : imgPath.inactiveCheckboxIcon
                }
                style={styles.checkBoxIcon}
              />
            </View>
            <Text style={styles.bottomTxt}>
              By Logging in, you NOOVVOO's{' '}
              <Text style={styles.termsTxt}>Privacy Policy </Text>
              and <Text style={styles.termsTxt}>Terms of Use</Text>
            </Text>
          </TouchableOpacity>
          {/* ------------------ */}
          <ButtonComp
            btnTxt="Continue"
            onPress={() => navigation.navigate(navigationString.SET_PASSWORD)}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Register;
