import {Text, View} from 'react-native';
import React, {useState} from 'react';
import HeaderComp from '../../components/HeaderComp';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './style';
import ButtonComp from '../../components/ButtonComp';
import navigationString from '../../constants/navigationString';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import imgPath from '../../constants/imgPath';
import {moderateVerticalScale} from 'react-native-size-matters';

const SetPW = ({navigation}) => {
  const [isVisiable, setIsVisiable] = useState(true);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <HeaderComp />

        <View style={styles.headingView}>
          <Text style={styles.headingTxt}>Set Password</Text>
          <Text style={styles.subHeadingTxt}>
            Set password for your new account{' '}
            <Text style={styles.mobTxt}>(+91) 78459612388</Text>
          </Text>
        </View>

        <TextInputWithLabel
          label="Password"
          placeHolder="Enter your password"
          secureTextEntry={isVisiable} // for dot circle to hide password
          rightIcon={isVisiable ? imgPath.hideEye : imgPath.showEye}
          onPressRight={() => setIsVisiable(!isVisiable)}
          inputStyle={{marginVertical: moderateVerticalScale(76)}}
        />

        <ButtonComp
          onPress={() => navigation.navigate(navigationString.SET_PASSWORD)}
          btnStyle={styles.btnStyle}
          img={imgPath.arrowForward}
        />
      </View>
    </SafeAreaView>
  );
};

export default SetPW;
