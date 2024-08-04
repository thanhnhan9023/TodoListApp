/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-extraneous-dependencies */

import { useStyles } from 'react-native-unistyles';

import { Icon } from '@components/icon';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from '@rn-core';

import { TAB_SCREEN, TAB_SCREEN_DYNAMIC } from './screen-types';

const Tab = createBottomTabNavigator();

function MyTabs() {
  const { theme } = useStyles();

  return (
    <Tab.Navigator
      initialRouteName={TAB_SCREEN.HOME}
      screenOptions={_ => ({
        headerShown: false,
        tabBarActiveTintColor: theme.color.primaryMain,
      })}>
      {Object.values(TAB_SCREEN_DYNAMIC).map((item: any, index) => (
        <Tab.Screen
          key={index}
          name={item.screen}
          component={item.component}
          options={{
            tabBarItemStyle: {
              paddingTop: 10,
            },
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  fontSize: 12,
                  marginTop: 8,
                  fontWeight: focused ? 'bold' : 'normal',
                  color: focused ? theme.color.primaryMain : theme.color.black,
                }}>
                {item.screen}
              </Text>
            ),
            tabBarIcon: ({ focused }) => (
              // <Image source={ icons.icCalendar}  style={{tintColor:'black'}} />
              <Icon
                icon={item.icon}
                size={22}
                colorTheme={focused ? 'primaryMain' : 'black'}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export default MyTabs;
