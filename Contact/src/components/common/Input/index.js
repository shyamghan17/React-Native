import React from 'react';
import {Text, TextInput, View } from 'react-native';

const Input = ({onChangeText, value, style, lable, placeholder, icon})=>{


    return(
<View>
    {lable && <Text>{lable}</Text>}
    <View>
        <View>{icon && icon}</View>
        <TextInput 
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        style={style}
        
        >
        </TextInput>
    </View>

</View>         
    )
}
export default Input