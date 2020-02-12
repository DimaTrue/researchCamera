import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icons from 'react-native-vector-icons/FontAwesome';

import MainScreen from '../screens/MainScreen';
import Camera from '../screens/Camera';
import DidSnapshotScreen from '../screens/DidSnapshotScreen';

export const StackNav = createStackNavigator({
  Camera: {
    screen: Camera,
    navigationOptions: {
      header: null,
    },
  },
  DidSnapshotScreen: {
    screen: DidSnapshotScreen,
  },
});

export const TabNav = createBottomTabNavigator(
  {
    Main: {
      screen: MainScreen,
      navigationOptions: () => ({
        tabBarLabel: 'Main',
      }),
    },
    Camera: {
      screen: StackNav,
      navigationOptions: () => ({
        tabBarLabel: 'Recognition',
      }),
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        const IconComponent = Icons;
        let iconName;

        if (routeName === 'Main') {
          iconName = 'home';
        } else if (routeName === 'Camera') {
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
