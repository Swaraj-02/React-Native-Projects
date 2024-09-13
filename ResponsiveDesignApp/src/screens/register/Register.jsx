import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import navigationString from '../../constants/navigationString';

const Register = ({navigation}) => {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate(navigationString.LOGIN)}
        title="Sign In"
      />
      <Text>Register</Text>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
