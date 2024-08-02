/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';

import BootSplash from 'react-native-bootsplash';
import { useSelector } from 'react-redux';

import { RootStackParamList } from '@navigation/screen-types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { selectAppToken } from '@redux-selector/app';
// import { Home } from '@screens/authentication/home';
// import { Login } from '@screens/un-authentication/login';

import MyTabs from './TabBottom';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  // state

  // effect
  useEffect(() => {
    const id = setTimeout(() => {
      BootSplash.hide({ fade: true });
    }, 1000);

    return () => clearTimeout(id);
  }, []);

  // render
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarTranslucent: true,
        navigationBarColor: 'transparent',
      }}
      initialRouteName="TabMain">
      <RootStack.Group
        screenOptions={{
          freezeOnBlur: true,
        }}
      />
      <RootStack.Screen name={'TabMain'} component={MyTabs} />
      {/* {token === undefined ? (
        <RootStack.Group
          screenOptions={{
            freezeOnBlur: true,
          }}>
          <RootStack.Screen name={APP_SCREEN.LOGIN} component={Login} />
        </RootStack.Group>
      ) : (
        <RootStack.Group>
          <RootStack.Screen name={APP_SCREEN.HOME} component={Home} />
        </RootStack.Group>
      )} */}
    </RootStack.Navigator>
  );
};
