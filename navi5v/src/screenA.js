import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';


export default screenA= ({navigation, route}) =>{

  const Users = [

    {
      id:1,
      name:'user A'
    }, {
      id:2,
      name:'user B'
    }, {
      id:3,
      name:'user C'
    }, {
      id:4,
      name:'user D'
    }
  ]

  const [name, setName] = useState('')
  const OnPressHandeler = ()=>navigation.navigate('screenB')
    // navigation.toggleDrawer()

    return(
      <View style={styles.container1}>
        <Text style={styles.text}>
          screen A
        </Text>
        <TouchableOpacity onPress={OnPressHandeler}>
          <Text> Get the last user</Text>
        </TouchableOpacity>
        <Text>  Screen B</Text> 
      <Text> {name}</Text>
      </View>
    )
  }
  const styles = StyleSheet.create({
    container1:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    fontWeight:'500',
    fontSize:50,
  } 
  })