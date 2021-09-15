
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LOGIN, REGISTER } from '../constants/routeName';
import Login from '../screens/Login';
import SignUp from '../screens/Register';


const AuthNavigator = () =>{

    const AuthStack = createStackNavigator();
    return (

        <AuthStack.Navigator
        screenOptions={{headerShown:false}}
        initialRouteName={LOGIN}>
            <AuthStack.Screen name={LOGIN} component={Login}/>
            <AuthStack.Screen name={REGISTER} component={SignUp}/>
        </AuthStack.Navigator>
    )
}

export default AuthNavigator