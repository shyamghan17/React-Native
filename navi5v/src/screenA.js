import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';

export default screenA= ({navigation, route}) =>{

  const [name, setName] = useState('')
  // const [getData, setGetData] = useState('')


  useEffect(() => {
    getData()
  }, [])
  const getData = ()=>{
    try {
      AsyncStorage.getItem('UserName')
      .then(value => {
        if(value != null) {
          setName(value)
        }
      })
      
    } catch (error) {
      console.log(error)
    }
  }



 
  const updateData = ()=>{
    try {
      AsyncStorage.getItem('UserName')
      .then(value => {
        if(value != null) {
         Alert.alert('success', 'your data has been updated')
        }
      })
      
    } catch (error) {
      console.log(error)
    }
  }

  const removeData = async() =>{
    try {
      await AsyncStorage.removeItem('UserName')
      navigation.navigate('Login')
    } catch (error) {
      console.log(error)
    }

  }
    return(
      <View style={styles.container}>
        <Text style={styles.text}>
          Safe Data ! Welcome {name}
        </Text>
                <TextInput style={styles.testInput} placeholder="Enter Your Name" value={name} onChangeText={(value) =>setName(value)}></TextInput> 

        <TouchableOpacity
        onPress={updateData} style={styles.button}><Text>update</Text></TouchableOpacity>

<TouchableOpacity
        onPress={removeData} style={styles.button}><Text>Remove</Text></TouchableOpacity>

        
      </View>
    )
  }