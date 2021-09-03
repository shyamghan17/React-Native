import React, { Component, useState } from 'react';
import { Modal, Text, View, StyleSheet, TouchableOpacity, StatusBar, StatusBarIOS, ScrollView, RefreshControl, FlatList, SectionList, TextInput, Button, Pressable, Alert, ToastAndroid, ProgressBarAndroidComponent} from 'react-native'

const AppButton = (props) => {

 return(
       <TouchableOpacity 
       style={styles.textInput}
       onPress={props.onPressFunction}> 
       <Text>
         {props.title}</Text>
         </TouchableOpacity>
 )
}

export default AppButton

const styles = StyleSheet.create({
  container1:{
    flex:1,
justifyContent:'flex-start',
alignItems:'center',
marginTop:50
}, 
textInput:{
  borderWidth:1,
  borderColor:'gray',
  backgroundColor:'#ff0fff',
  padding:10,
  borderRadius:4,
  margin:10

},
testStyle:{
  fontSize:20,
  color:'#f98800',
  fontFamily:'arial',
  fontWeight:"500"
}
})