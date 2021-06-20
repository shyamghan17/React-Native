import React from 'react'
import {Text,View, Font, TextInput, styleSheet} from 'react-native'

const Displ =() => {

    return (
       <View>
           <TextInput
           style={{
               height:40,
               width:200,
               backgroundColor:'yellow',
               borderColor:'gray',
               borderWidth:1
           }} defaultValue='add your name'></TextInput>
       </View>
    )
}

export default Displ