
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Text, View} from 'react-native'


const Login =()=>{
    return(
        <View>
            <Text>
                Hi form Login
            </Text>
        </View>
    )
}
const SignUp =()=>{
    return(
        <View>
            <Text>
                Hi form SighUp
            </Text>
        </View>
    )
}

const AuthNavigator = () =>{

    const AuthStack = createStackNavigator();
    return (

        <AuthStack.Navigator initialRouteName='Login'>
            <AuthStack.Screen name='Login' component={Login}/>
            <AuthStack.Screen name='Register' component={SignUp}/>
        </AuthStack.Navigator>
    )
}

export default AuthNavigator