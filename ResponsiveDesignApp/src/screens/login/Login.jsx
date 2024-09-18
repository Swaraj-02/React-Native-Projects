import React, {useState} from 'react';
import {Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './style';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import imgPath from '../../constants/imgPath';
import ButtonComp from '../../components/ButtonComp';
import navigationString from '../../constants/navigationString';

const Login = ({navigation}) => {
  const [isVisiable, setIsVisiable] = useState(true);

  return (
    <View style={styles.container}>
      <View>
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
              secureTextEntry={isVisiable} // for dot circle to hide password
              rightIcon={isVisiable ? imgPath.hideEye : imgPath.showEye}
              onPressRight={() => setIsVisiable(!isVisiable)}
            />
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.forgotView}
            onPress={() =>
              navigation.navigate(navigationString.FORGET_PASSWORD)
            }>
            <Text style={styles.forgotTxt}>Forgot Password?</Text>
          </TouchableOpacity>

          <ButtonComp btnTxt="Login" onPress={() => alert("I'm login")} />
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.bottomTxt}>Not a member? </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(navigationString.CHOOSE_ACCOUNT)}>
          <Text style={[styles.bottomTxt, styles.bottomJoinNowTxt]}>
            Join Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
