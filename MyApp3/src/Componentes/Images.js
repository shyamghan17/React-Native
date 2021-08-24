
import * as React from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../style'
import Icon from 'react-native-vector-icons/AntDesign';


function ImageScreen ({ navigation}) {
    return (
     
      <View style={styles.container}>
         
        <Text>Settings</Text>

        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
        <Icon name="profile" size={50}/>
        </TouchableOpacity>
        
        <Text>Setting  Page</Text>


      </View>
  

    );
  }
export default ImageScreen

