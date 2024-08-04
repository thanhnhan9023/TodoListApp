/* eslint-disable import/order */

import React, { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';
import {
  APP_SCREEN,
  MODAL_SCREEN,
  RootStackParamList,
} from '@navigation/screen-types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ModalAddCategory from '@screens/Home/ModalAddCategory';

import MyTabs from './TabBottom';
import TodoList from '@screens/Home/TodoList';
import ModalAddToto from '@screens/Home/ModalAddToto';

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
      initialRouteName={APP_SCREEN.TABMAIN}>
      <RootStack.Group>
        <RootStack.Screen name={APP_SCREEN.TABMAIN} component={MyTabs} />
      </RootStack.Group>
      <RootStack.Group>
        <RootStack.Screen
          options={{
            presentation: 'modal',
          }}
          name={MODAL_SCREEN.MODALADDCATEGORY}
          component={ModalAddCategory}
        />
        <RootStack.Screen name={APP_SCREEN.TODOLIST} component={TodoList} />
        <RootStack.Screen
          options={{
            presentation: 'transparentModal',
          }}
          name={MODAL_SCREEN.MODALADDTODO}
          component={ModalAddToto}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
