import {Image, Text, View, Keyboard} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderComp from '../../components/HeaderComp';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './style';
import ButtonComp from '../../components/ButtonComp';
import navigationString from '../../constants/navigationString';
import TextInputWithLabel from '../../components/TextInputWithLabel';

const ForgotPW = ({navigation}) => {
  // - For keboard set along with flex for responsive -

  const [keyboadHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const keyboardDidShowlistener = Keyboard.addListener(
      'keyboardWillShow',
      e => {
        console.log('event trigger on keyboad show', e);

        setKeyboardHeight(e.endCoordinates.height);
      },
    );
    const keyboardDidHidelistener = Keyboard.addListener(
      'keyboardWillHide',
      e => {
        console.log('event trigger on keyboad hide', e);

        setKeyboardHeight(0);
      },
    );

    return () => {
      keyboardDidShowlistener.remove();
      keyboardDidHidelistener.remove();
    };
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <HeaderComp />
        <View style={styles.imgView}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/6195/6195699.png',
            }}
            style={styles.imgStyle}
          />
        </View>

        <View style={styles.headingView}>
          <Text style={styles.headingTxt}>Forgot Password</Text>
          <Text style={styles.subHeadingTxt}>
            Enter an email address that associated with your account
          </Text>
        </View>

        <View style={[styles.inputView, {marginBottom: keyboadHeight}]}>
          <TextInputWithLabel
            label="Email Address"
            placeHolder="Enter your email"
            inputStyle={styles.customInputStyle}
            keyboardType="email-address"
          />

          <ButtonComp
            onPress={() => navigation.navigate(navigationString.SET_PASSWORD)}
            btnStyle={styles.btnStyle}
            btnTxt="send"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPW;
