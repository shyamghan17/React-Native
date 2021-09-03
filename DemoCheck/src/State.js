import React, { Component, useState } from 'react';
import { Modal, Text, View, StyleSheet, TouchableOpacity} from 'react-native'

const ModalExample = () => {
    const [name, setName] = useState("ghanshyam")
    const [session, setSession] = useState({number:4, title:'shaunak'})
    const [current, setCurrent] = useState(true)
    const [counter, setCounter] = useState(0)
    const MyNickName =() =>{
      setName("radhey mohan Ghanshyam")
      setSession({number:7, title:'banku'})
      setCurrent(false)
      setCounter(counter+1)
    }
  return(
    <View style={styles.container}>
        <Text>My name is {name}</Text>
        <Text>this is name of my son {session.title} and he is {session.number} year old</Text>
        <Text>{current ? 'hello' : 'bye'}</Text>
        <Text>you have cllicked {counter} times</Text>


        <TouchableOpacity style={styles.button} onPress={MyNickName}><Text>cllick here to see my nick name</Text></TouchableOpacity>

    </View>
  )
}

export default ModalExample

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:22
  },
  button:{
    borderWidth:1,
    backgroundColor:'#f0ff0f',
    borderColor:'#432323',
    borderRadius:5,
    padding:10
  },
  modalBox:{
    borderWidth:1,
    borderColor:'#232323',
    borderRadius:5,
    backgroundColor:'#f0ff0f',
    padding:20,
    alignItems:'center'
  }
})