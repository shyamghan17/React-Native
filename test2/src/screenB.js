
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';


export default screenB= ({navigation, route}) =>{
  const {ItemName, ItemId} = route.params
  
  const OnPressHandeler = () =>{
    navigation.navigate('screenA', {Message:'Message form B'})
    // navigation.toggleDrawer()
  }
    return(
      <View style={styles.container1}>
        <Text style={styles.text}>
          screen B
        </Text>
        <TouchableOpacity onPress={OnPressHandeler}>
          <Text> Go To Screen C</Text>
        </TouchableOpacity>
       
        <Text>{ItemName}</Text> 
        <Text>{ItemId}</Text>
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
    fontSize:50
  } 
  })