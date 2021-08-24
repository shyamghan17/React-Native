
import * as React from 'react';
import {Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './src/login/Login'
import SignUp from './src/login/SinUp';
import ProfileScreen from './src/login/Profile';
import  HomeScreen from './src/Componentes/HomeScreen';
import SettingScreen from './src/Componentes/Setting';
import Icon from 'react-native-vector-icons/Ionicons';  

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


const Tab = createMaterialBottomTabNavigator()

function MyTabs() {
  return (
    <Tab.Navigator 
    initialRouteName="Home"
    activeColor="#f0edf6"
    inactiveColor="#3e2465"
    barStyle={{ backgroundColor: '#008b8b', }}
    screenOptions={{ headerShown: false,  }}>
      <Tab.Screen
      name="Home!"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
       
      }}/> 

      <Tab.Screen name="Setting" component={SettingScreen}
              options={{
                tabBarLabel: 'Setting',
              }} />
      <Tab.Screen name="Profile" component={MyStack}
                    options={{
                      tabBarLabel: 'Profile',
                    }} />

    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function MyStack() {
  return(
    <Stack.Navigator
    screenOptions={{
      headerStyle: {
      backgroundColor:'#008b8b',
      },
      headerTintColor: '#fff',
      headerShown:false,
    }}>
      <Stack.Screen name='Home' component={ProfileScreen}/>
      <Stack.Screen name ="Login" component={LoginScreen} />
      <Stack.Screen name ="SignUp"  component= {SignUp} />
    </Stack.Navigator>
  )
} 




function App() {
  return (
    <NavigationContainer>
            
        <MyStack/>        
      
    </NavigationContainer>
  );
}

export default App;