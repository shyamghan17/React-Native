import { createStackNavigator } from "@react-navigation/stack";
import {Text, View} from 'react'


const Contact =()=>{
    return(
        <View>
            <Text>
                Hi form contact
            </Text>
        </View>
    )
}
const ContactDetails =()=>{
    return(
        <View>
            <Text>
                Hi form details
            </Text>
        </View>
    )
}
const ContactContent =()=>{
    return(
        <View>
            <Text>
                Hi form content
            </Text>
        </View>
    )
}
const ContactSetting =()=>{
    return(
        <View>
            <Text>
                Hi form Setting
            </Text>
        </View>
    )
}

const HomeNavigator = () =>{
    const HomeStack = createStackNavigator();
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name='Contact' component={Contact}/>
            <HomeStack.Screen name='Content' component={ContactContent}/>
            <HomeStack.Screen name='Details' component={ContactDetails}/>
            <HomeStack.Screen name='Setting' component={ContactSetting}/>

        </HomeStack.Navigator>
    )
}

export default HomeNavigator