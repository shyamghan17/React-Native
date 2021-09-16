import React,{useState} from 'react';
import {Text, TextInput, View } from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';


const Input = ({onChangeText, value, style, lable, placeholder, icon, iconPosition, error})=>{

    const [focused, setFocused] = useState(false)

         const getFlexDirection =()=>{
             if(icon && iconPosition) {
                 if(iconPosition === 'left'){
                     return 'row'
                 }
                 else if (iconPosition === 'right'){
                     return 'row-reverse'
                 }
             }
         }
         const getBorderColor =()=>{

             if (focused) {
                 return colors.primary;
             }
             if (error) {
                 return  colors.danger
             }
             else {
                 return colors.gray
             }
         }
    return(

    <View style={styles.inputContainer}>
    {lable && <Text>{lable}</Text>}
    <View style={[styles.wrapper,
         {flexDirection: getFlexDirection(),
         borderColor:getBorderColor()},
         ]}>

    <View >{icon && icon}</View>

    <TextInput 
    style={[styles.textInput, style]}
    onChangeText={onChangeText}
    value={value}
    placeholder={placeholder}
        onFocus={()=>{setFocused(true)
        }}
        onBlur={()=>{setFocused(false)}}
    >
    </TextInput>
    </View>
    {error && <Text style={styles.error}>{error}</Text>}

    </View>         
    )
    }
export default Input