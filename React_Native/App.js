import React from 'react';
import { Text, StyleSheet, FlatList,createStackNavigator, createAppContainer, Image, ScrollView } from 'react-native';

import HomeScreen from './src/homeScreen'

const navigator = createStackNavigator (
    {

      Home: HomeScreen,


    } ,
    {
    initialRouteName:'Home',
    defaultNavigationOptions:{
      titel:'App'
    }
  }
)


export default createAppContainer(navigator)