import React, { Component, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import screenA from './src/screenA'
import screenB from './src/screenB';
import screenC from './src/screenC';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Stack = createStackNavigator()

const Tab = createMaterialTopTabNavigator()

const App = () => {

 return(
  <NavigationContainer >
  <Tab.Navigator 
  screenOptions={({route}) => ({
    tabBarIcon:({focused, size, color    }) =>{
      let iconName;
      if (route.name ==='screenA' ) { 
        iconName='autoprefixer';
        size = focused ? 25 : 20
        // color = focused ? '#ba55d3' : '#9370db'
      }
      else if (route.name === 'screenB'){
        iconName ='btc' ;
        size = focused ? 25 : 20 
        // color = focused ? '#ba55d3' : '#9370db'


      }
      else if (route.name === 'screenC'){
        iconName ='ruble-sign' ;
        size = focused ? 25 : 20 
        // color = focused ? '#ba55d3' : '#9370db'


      }
      return(
          <Icon 
          name ={iconName}
          size = {size}
          color = {color}
           />
        )
    }

  })}
  tabBarOptions ={{
    activeTintColor:'#0000ff',
    inactiveTintColor:'#ff0000',
    activeBackgroundColor:'#e0ffff',
    inactiveBackgroundColor:'#fffff0',
    showIcon:true,

  }}
  activeColor='#00ffff'
  inactiveColor='#00aaff'
  barStyle={{backgroundColor:'#232323'}}
 >
<Tab.Screen name="screenA" component={screenA} options ={{tabBarBadge:49}}/>
<Tab.Screen name="screenB" component={screenB}/>
<Tab.Screen name="screenC" component={screenC}/>


    </Tab.Navigator>


  </NavigationContainer>
 )
}

const styles = StyleSheet.create({
  container1:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
},
text:{
  fontWeight:'500',
  fontSize:50
},
navigationTab:{
  marginTop:33
}
})
export default App
