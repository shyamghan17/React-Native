
import * as React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../style'


const ProfileScreen =({navigation}) => {
    return (
      <ScrollView style={styles.scrollView}>
              <View style={styles.container}>
          <Image 
            style={styles.Logo}
            source={require('../logo.png')}
        />
        <Text>Profile</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={()=>navigation.navigate('Login')}>
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={()=>navigation.navigate('SignUp')}>
                <Text>Sign Up</Text>
            </TouchableOpacity>
            

      </View> 
      </ScrollView>

    );
  }
  
  export default ProfileScreen