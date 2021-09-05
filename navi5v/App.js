import React, { Component, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import screenA from './src/screenA'
import screenB from './src/screenB';
import screenC from './src/screenC';
import Icon from 'react-native-vector-icons/FontAwesome5'
import LoginScreen from './src/login/Login';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { cerateDrawerNavigator, createDrawerNavigator } from '@react-navigation/drawer';
const Stack = createStackNavigator()

const Drawer = createDrawerNavigator()

const App = () => {

 return(
  <NavigationContainer >
  <Stack.Navigator 
  initialRouteName='Login'
  drawerPosition='left'
  drawerType='front'
  edgeWidth={600}
  hideStatusBar={false}
  overlayColor='#232323'
  drawerStyle={{
    backgroundColor:'#fddfdd',
    width:"60%"
  }}
  screenOptions={{
    headerShown:true,
    swipeEnabled:true,
    gestureEnabled:true,
    headerTitleAlign:'center',
    headerStyle:{
      backgroundColor:'#fddfdd'
    },
    headerTintColor:'#ffffff',
    headerTitleStyle:{
      fontSize:25,
      fontWeight:'bold'
    }
   
}}
 >
<Stack.Screen 
name="screenA" 
component={screenA} 
options ={{ title:'A Screen', drawerIcon:({focused}) =>(
  <Icon name='quidditch' size ={focused ? 25 : 20 } color ={focused ? '#f08080' : '#ffff00'}/>
  )}}/>
<Stack.Screen name="screenB" component={screenB} options ={{ title:'B Screen', drawerIcon:({focused}) =>(
  <Icon name='btc' size ={focused ? 25 : 20 } color ={focused ? '#f08080' : '#ffff00'}/>
)}}/> 
<Stack.Screen name="screenC" component={screenC} options ={{ title:'C Screen', drawerIcon:({focused}) =>(
  <Icon name='ruble-sign' size ={focused ? 25 : 20 } color ={focused ? '#f08080' : '#ffff00'}/>
)}}
/>
<Stack.Screen name='Login' component={LoginScreen} options={{title:'Login Page'}}/>
    </Stack.Navigator>


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
