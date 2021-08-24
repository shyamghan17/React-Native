
import * as React from 'react';
import Animated from 'react-native-reanimated'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import ComponentScreen from './src/ComponentScreen'
import AboutUs from './src/AboutUs'

const Drawer = createDrawerNavigator();

const App =()=> {
  return (
     <NavigationContainer>
        <Drawer.Navigator>  

            <Drawer.Screen name='Profile' component={ComponentScreen}/>
            <Drawer.Screen name='Setting' component={AboutUs}/>       

        </Drawer.Navigator>     
    </NavigationContainer>
      
  );
}

export default App;