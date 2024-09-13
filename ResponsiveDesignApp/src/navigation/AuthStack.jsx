import React from 'react';
import {Loggin, Register, ChooseAccount, ForgetPW, SetPW} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationString from '../constants/navigationString';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={navigationString.LOGIN} component={Loggin} />
      <Stack.Screen name={navigationString.REGISTER} component={Register} />
      <Stack.Screen
        name={navigationString.CHOOSE_ACCOUNT}
        component={ChooseAccount}
      />
      <Stack.Screen
        name={navigationString.FORGET_PASSWORD}
        component={ForgetPW}
      />
      <Stack.Screen name={navigationString.SET_PASSWORD} component={SetPW} />
    </Stack.Navigator>
  );
};

export default AuthStack;
