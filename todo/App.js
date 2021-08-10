import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import {View, Text} from 'react-native';

const HomeScreen =()=>{
  return(
    <View>
      <Text style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        home screen
      </Text>
    </View>
  )
}

const DetailsScreen =()=>{
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        Details screen
      </Text>
    </View>
  )
}

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
         name='Home'
         component={HomeScreen}/>
        <Stack.Screen
         name="Details"
         component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App