import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createStackNavigator } from 'react-navigation-stack';
import Icons from 'react-native-vector-icons/FontAwesome';

import MainScreen from '../Screens/MainScreen';
import Camera from '../Screens/Camera';

export const TabNav = createBottomTabNavigator(
  {
    Main: {
      screen: MainScreen,
      navigationOptions: () => ({
        tabBarLabel: 'Main',
      }),
    },
    Settings: {
      screen: Camera,
      navigationOptions: () => ({
        tabBarLabel: 'Recognition',
      }),
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/display-name
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        const IconComponent = Icons;
        let iconName;

        if (routeName === 'Main') {
          iconName = 'home';
        } else if (routeName === 'Settings') {
          iconName = 'camera';
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#0094e3',
      inactiveTintColor: '#ced3db',
    },
  },
);

export default createAppContainer(TabNav);
