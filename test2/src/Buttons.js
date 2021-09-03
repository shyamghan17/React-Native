import React, { Component, useState } from 'react';
import { Modal, Text, View, StyleSheet, TouchableOpacity, StatusBar, StatusBarIOS, ScrollView, RefreshControl, FlatList, SectionList, TextInput, Button} from 'react-native'

const App = () => {
  const [name, setName] = useState('')

  const [submmit, setSubmmit] = useState(false)

const onPressHandeler =()=>{
  setSubmmit(!submmit)

}

 return(
   <View style={styles.container1}>

<Text style={styles.testStyle}> Write your name here</Text>

     <TextInput 
    
     style={styles.textInput}
     placeholder='e.g. ghanshyam'
     onChangeText={(value)=> setName(value)}

      />

          <Button title={submmit ? 'Clear' : 'submit'}
          
          onPress={onPressHandeler}/>

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
  width:200,
  padding:10,
  borderRadius:4,
  margin:10

},
testStyle:{
  fontSize:30,
  color:'red',
  fontFamily:'arial',
  fontWeight:"500"
}
})