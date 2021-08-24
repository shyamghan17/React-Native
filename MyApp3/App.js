import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/Componentes/HomeScreen'
import SettingScreen from './src/Componentes/Setting';
import BlinkApp from './src/Componentes/Blink';


const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor:'#fa8072'}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel:'home',
          tabBarIcon: ({color}) => (
          <Icon name="home-outline" color={color} size={25} />
          ),
        }} />
        <Tab.Screen
          name='Setting' 
          component={SettingScreen}
          options={{ 
            tabBarIcon:({color}) => (
            <Icon name="settings-outline" color={color} size={25}/>
            ),
             }} />
             <Tab.Screen
        name="Image"
        component={BlinkApp}
        options={{
          tabBarLabel:'Images',
          tabBarIcon: ({color}) => (
          <Icon name="image-outline" color={color} size={25} />
          ),
        }} />
        

    </Tab.Navigator>
  );
}




export default function App() {
  return (
    <NavigationContainer>
        <MyTabs/>
    </NavigationContainer>
  );
}
