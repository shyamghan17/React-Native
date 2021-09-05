
import  React, {useState, useEffect}from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import styles from '../style'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen ({navigation}) {
  const [name, setName ]=useState('');


  useEffect(() => {
    getData()
  }, [])
  const getData = ()=>{
    try {
      AsyncStorage.getItem('UserName')
      .then(value => {
        if(value != null) {
        navigation.navigate('screenA')
        }
      })
      
    } catch (error) {
      console.log(error)
    }
  }


  const setData = async ()=>{
    if(name.length == 0){
      Alert.alert('warning', 'please write your data')
    } else{
      try{
        await AsyncStorage.setItem('UserName', name)
        navigation.navigate('screenA')
      }
      catch (error) {
        console.log(error)
      }

    }
  }


    return (
      <ScrollView style={styles.scrollView}>

      <View style={styles.container}>
          <Image 
            style={styles.Logo}
            source={require('../logo.png')}
        />
        <Text>Login</Text>
        <TextInput style={styles.testInput}
         placeholder="Name"
         onChangeText ={(value)=> setName(value)}
         ></TextInput>
        <TextInput style={styles.testInput} placeholder="Age"></TextInput>


        <TouchableOpacity
        onPress={setData} style={styles.button}><Text>Login</Text></TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
        
        <Text>I don't have an Accoun go to login Page</Text>
        </TouchableOpacity>

      </View>
      </ScrollView>

    );
  }
  
