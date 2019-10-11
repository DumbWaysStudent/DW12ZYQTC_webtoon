import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './src/screens/Login';
import ForYou from './src/screens/ForYou';

const AuthStack = createStackNavigator({
  ForYou: {
    screen: ForYou,
    navigationOptions: {
      title: 'For You',
      header: null,
      cardStack: {
        gesturesEnabled: false,
      },
    },
  },
});


const AppNavigator = createSwitchNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
      header: null,
    },
  },
  Auth: {
    screen: AuthStack,
  },
});

export default createAppContainer(AppNavigator);