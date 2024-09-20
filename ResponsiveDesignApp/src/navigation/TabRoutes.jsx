/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Booking, Profile} from '../screens';
import navigationString from '../constants/navigationString';
import imgPath from '../constants/imgPath';
import {moderateScale} from 'react-native-size-matters';
import colors from '../styles/colors';

const BottomTab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false, // Hide default header
        tabBarActiveTintColor: colors.themeColor,
        tabBarInactiveTintColor: colors.blackOpacity60,
      }}>
      <BottomTab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={imgPath.homeIcon}
              style={[
                styles.imgStyle,
                {
                  tintColor: focused
                    ? colors.themeColor
                    : colors.blackOpacity60,
                },
              ]}
            />
          ),
        }}
        name={navigationString.HOME}
        component={Home}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={imgPath.bookingIcon}
              style={[
                styles.imgStyle,
                {
                  tintColor: focused
                    ? colors.themeColor
                    : colors.blackOpacity60,
                },
              ]}
            />
          ),
        }}
        name={navigationString.BOOKING}
        component={Booking}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={imgPath.profileIcon}
              style={[
                styles.imgStyle,
                {
                  tintColor: focused
                    ? colors.themeColor
                    : colors.blackOpacity60,
                },
              ]}
            />
          ),
        }}
        name={navigationString.PROFILE}
        component={Profile}
      />
    </BottomTab.Navigator>
  );
};

export default TabRoutes;
const styles = StyleSheet.create({
  imgStyle: {
    height: moderateScale(30),
    width: moderateScale(30),
  },
});
