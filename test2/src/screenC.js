
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default screenC = ({navigation}) =>{
    return(
      <View style={styles.container1}>
        <Text style={styles.text}>
          screen C
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('screenA')}>
          <Text> Go To Screen A</Text>
          <Icon name='rightsquareo'/>
        </TouchableOpacity>
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