import React, { Component, useState } from 'react';
import { Modal, Text, View, StyleSheet, TouchableOpacity, StatusBar, StatusBarIOS, ScrollView, RefreshControl, FlatList, SectionList, TextInput, Button, Pressable, Alert, ToastAndroid} from 'react-native'

const App = () => {
  const [name, setName] = useState('')

  const [submmit, setSubmmit] = useState(false)

const onPressHandeler =()=>{
  if(name.length > 3) {
  setSubmmit(!submmit)

  }
  else {
  //   Alert.alert('Warning', 'The name must be longer than 3 Character', [
  //     {text:'later', onPress:()=>console.warn('okey pressed'), style:'default'},
  //     {text:'ok', onPress:()=>console.warn('okey pressed'), style:'default'},
  //     {text:'cancel', onPress:()=>console.warn('okey pressed'), style:'default'}

  //   ], { cancelable:true, onDismiss:()=>console.warn('Alert dissmissed!')})

  ToastAndroid.show('helloworld ')
  }

}

 return(
  <View style={styles.container1}>

<Text style={styles.testStyle}> Write your name here</Text>

    <TextInput 
   
    style={styles.textInput}
    placeholder='e.g. ghanshyam'
    onChangeText={(value)=> setName(value)}

     />
         {
         submmit ?
         <Text style={styles.testStyle}> Write your name is {name}</Text>
             :
             null
         
       }

       <TouchableOpacity style={styles.textInput}
       onPress={onPressHandeler}> 
       <Text>
         {submmit ? 'clear' : 'submmit'}</Text>
         </TouchableOpacity>

  </View>
 )
}

export default App

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