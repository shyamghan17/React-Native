import React,{useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import { GlobalContext } from '../context/reducers/Providers';

const AppNavContainer = ()=>{

        const {authState: {isLoggedIn}} = useContext(GlobalContext);
        console.log('isLoggeIn :=>', isLoggedIn)

    return(
        <NavigationContainer>
            {isLoggedIn ? <DrawerNavigator/> : <AuthNavigator/>}
        
   
        </NavigationContainer>

    )
}
export default AppNavContainer