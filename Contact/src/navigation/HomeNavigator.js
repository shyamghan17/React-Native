import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { CONTACT_DETAILS, CONTACT_LIST, CREATE_CONTACT, SETTING } from '../constants/routeName';
import Contacts from '../screens/Contact';
import ContactDetails from '../screens/ContactDetails';
import Settings from '../screens/Settings';
import CreateContact from '../screens/CreateContacts';




const HomeNavigator = () =>{
    const HomeStack = createStackNavigator();
    return (
        <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
            <HomeStack.Screen name={CONTACT_LIST} component={Contacts}/>
            <HomeStack.Screen name={CONTACT_DETAILS} component={ContactDetails}/>
            <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact}/>
            <HomeStack.Screen name={SETTING} component={Settings}/>

        </HomeStack.Navigator>
    )
}

export default HomeNavigator