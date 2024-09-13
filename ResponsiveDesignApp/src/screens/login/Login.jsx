import {Text, View, ImageBackground} from 'react-native';
import React from 'react';
import styles from './style';
import TextInputWithLabel from '../../components/TextInputWithLabel';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://www.shutterstock.com/image-photo/happy-joyful-baby-diapers-lying-600nw-2145915237.jpg',
        }}
        style={styles.bgImg}>
        <Text style={styles.loginTxt}>Login</Text>
      </ImageBackground>

      {/* -- Login Form -- */}

      <View style={styles.mainContainer}>
        <View>
          <TextInputWithLabel
            label="Email Address"
            placeHolder="Enter your email"
            inputStyle={styles.customInputStyle}
            keyboardType="email-address"
          />
          <TextInputWithLabel
            label="Password"
            placeHolder="Enter your password"
            secureTextEntry // for dot circle to hide password
          />
        </View>
      </View>
    </View>
  );
};

export default Login;
