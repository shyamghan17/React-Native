import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import HomeNavigator from './HomeNavigator';

const NavContainer = ()=>{
    return(
        <NavigationContainer>
           <AuthNavigator/>
           {/* <HomeNavigator/>
           <DrawerNavigator/> */}
        </NavigationContainer>

    )
}
export default NavContainer