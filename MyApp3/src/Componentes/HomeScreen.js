
import * as React from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../style'
import Icon from 'react-native-vector-icons/AntDesign';
import { useState } from 'react';




function HomeScreen ({navigation}) {
  const[ count, setCount] = useState(0)
    return (
     
      <View style={styles.container}>
         
        <Text>count: {count} </Text>

        <TouchableOpacity onPress={()=>setCount(count+1)}>
        <Icon name="calculator" size={50}/>
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={()=>navigation.navigate('Setting')}>
        <Icon name="home" size={50}/>
        </TouchableOpacity> */}


        <Text>Settings</Text>


      </View>
  

    );
  }
export default HomeScreen

