
import * as React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../style'


const SignUp =({navigation}) => {
    return (
      <ScrollView style={styles.scrollView}>
              <View style={styles.container}>
          <Image 
            style={styles.Logo}
            source={require('../logo.png')}
        />
        <Text>Sign Up</Text>
        <TextInput style={styles.testInput} placeholder="First Name"></TextInput>

        <TextInput style={styles.testInput} placeholder="Last Name"></TextInput>

        <TextInput style={styles.testInput} placeholder="Email"></TextInput>

        <TextInput style={styles.testInput} placeholder="Mobile"></TextInput>

        <TextInput style={styles.testInput} placeholder="Password"></TextInput>

        <TextInput style={styles.testInput} placeholder="Confirm Password"></TextInput>


            <TouchableOpacity style={styles.button}><Text>Sign Up</Text></TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
              
            <Text>I already have an Accoun go to login Page</Text>
            </TouchableOpacity>

      </View> 
      </ScrollView>

    );
  }
  
  export default SignUp