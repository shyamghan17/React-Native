import React from 'react' 
import {Button, Text, View} from 'react-native'
import Displ from './display'

const getFullName=(firstName, secondName, thirdName) => {
    return firstName + " " + secondName +" " + thirdName
}

const Alerting =()=> {
   
        return ( 
        <View>
         
<Text>Hello, I am {getFullName("Ghanshyam", "Radhey", "Mohan")} !</Text>            
            </View>
        )
    
}

const Repeat =()=> {
return ( 
    <View>
<Alerting></Alerting>
<Alerting></Alerting>
<Alerting></Alerting>
</View>)

}
export default Repeat
