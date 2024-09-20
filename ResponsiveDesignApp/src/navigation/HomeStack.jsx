import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationString from '../constants/navigationString';
import TabRoutes from './TabRoutes';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={navigationString.TAB_ROUTES} component={TabRoutes} />
    </Stack.Navigator>
  );
};

export default HomeStack;
