
import * as React from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../style'
import AntIcon from '@ant-design/icons';



function HomeScreen ({navigation}) {
    return (
     
      <View style={styles.container}>
         
        <Text>Home </Text>

        <AntIcon name='home'/>


        <Text>Settings</Text>


      </View>
  

    );
  }
export default HomeScreen

