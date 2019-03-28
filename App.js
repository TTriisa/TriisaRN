import React from 'react';
import { Button, Image, View, Text, TouchableHighlight } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './views/HomeScreen';
import RollScreen from './views/RollScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Roll: RollScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
