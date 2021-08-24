
import * as React from 'react';
import { View, Text, TextInput,Pressable, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../style'
import Icon from 'react-native-vector-icons/AntDesign';


function SettingScreen ({ navigation}) {
    return (
     
      <View style={styles.container}>
         
        <Text>this.props.name</Text>

        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
        <Icon name="profile" size={50}/>
        </TouchableOpacity>
        
        <Text>Setting  Page</Text>
        <Pressable onPress={()=> alert('hello')}>
            <Text>I'm pressable!</Text>
            </Pressable>

      </View>
  

    );
  }
export default SettingScreen

