
import * as React from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../style'

const LoginScreen =({navigation}) => {
    return (
      <ScrollView style={styles.scrollView}>

      <View style={styles.container}>
          <Image 
            style={styles.Logo}
            source={require('../logo.png')}
        />
        <Text>Login</Text>
        <TextInput style={styles.testInput} placeholder="Email"></TextInput>
        <TextInput style={styles.testInput} placeholder="Password"></TextInput>


        <TouchableOpacity style={styles.button}><Text>Login</Text></TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
        
        <Text>I don't have an Accoun go to login Page</Text>
        </TouchableOpacity>

      </View>
      </ScrollView>

    );
  }
  
  export default LoginScreen