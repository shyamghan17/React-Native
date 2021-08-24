
import * as React from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../style'
import Icon from 'react-native-vector-icons/AntDesign';
import { useState, useEffect } from 'react';


const Blink = ( props,{ navigation}) => {
  const [isShowingText, setIsShowingText] = useState(true)
  
  useEffect(()=>{
    const toggle = setInterval(()=>{
      setIsShowingText(!isShowingText)
    }, 1000)
    return()=> clearInterval(toggle)
  })
  if (!isShowingText){
    return null
  }
  return<Text>{props.text}</Text>

}

    const BlinkApp = () =>{
      return(
        <View style={styles.container}>
          <Blink text="i love to blink"/>
          <Blink text="Yes blinking is so grate"/>
          <Blink text="Why did they ecer take this out of HTML"/>
          <Blink text="Look at me look at me look at me"/>

        </View>
      )
    
  }
export default BlinkApp

