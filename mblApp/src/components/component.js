import React from 'react'
import {View, StyleSheet, Button, ScrollView} from 'react-native'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};




class ScreenComponentOne extends React.Component{
    render () {
        return(
              <ScrollView>
              <View style={ styles.border}>
                  <Button 
                  title='go to screen one' 
                  onPress={() =>{
                  this.props.navigation.navigate('RouteNameTwo')
                 }}/>
              </View> 
              </ScrollView>
     
        )
      }
}


class ScreenComponentTwo extends React.Component{
    render () {
        return(
         
              <View style={ styles.border}>
                  <Button 
                  title='go to screen one' 
                  onPress={() =>{
                  this.props.navigation.navigate('RouteNameOne')
                 }}/>
              </View>
     
        )
      }
}

const AppNavigator = createSwitchNavigator({
    RouteNameTwo: ScreenComponentTwo,
    RouteNameOne: ScreenComponentOne,
});

export default class App extends React.Component{
    render() {
        return <NavigationContainer>
        <AppNavigator/> 
        </NavigationContainer> 
    }
}



const styles= StyleSheet.create({  
  border:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    borderWidth:25,
    borderRadius:5,
    borderColor:'teal',
  


  }
})

