import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Container from '../common/container';
import {SafeAreaView} from 'react-native-safe-area-context';
import Input from '../common/Input';
import CustomButton from '../common/customButton';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {LOGIN} from '../../constants/routeName';

const RegisterComponent = ({  onSubmit, onChange, form, loading, error, errors,}) => {  
    const {navigate} = useNavigation();

  return (
    <SafeAreaView>
      <Container>
        <Image
          style={styles.logoImage}
          source={require('../../assets/images/logos.png')}
        />

        <View>
          <Text style={styles.title}>Welcom To Ghanshyam Project</Text>
          <Text style={styles.subTitle}>Create a free Account</Text>
          <View style={styles.loginForm}>

          <Input
              lable="User Name"
              placeholder="Enter User Name"
              iconPosition="right"
              onChangeText={(value) =>{
                onChange({name: 'userName', value})
            }}
            error ={errors.userName}


            />
            <Input
              lable="First Name"
              iconPosition="right"
              placeholder="Enter First Name"
              onChangeText={(value) =>{
                onChange({name: 'firstName', value})
            }}
            error ={errors.firstName}

            />

            <Input
              lable="Last Name"
              placeholder="Last Name"
              iconPosition="right"
              onChangeText={(value) =>{
                onChange({name: 'lastName', value})
            }}
            error ={errors.lastName}

            />
            <Input
              lable="Email"
              placeholder="Enter Email"
              iconPosition="right"
              onChangeText={(value) =>{
                onChange({name: 'email', value})
            }}
            error ={errors.email}


            />
            <Input
            
              lable="Password"
              placeholder="Enter Password"
              secureTextEntry={true}
              icon={<Text>Show</Text>}
              iconPosition="right"
              onChangeText={(value) =>{
                onChange({name: 'password', value})
            }}
            error ={errors.password}

            />
 
    <CustomButton onPress={onSubmit} primary  title="Submit" />
          </View>
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an account</Text>

            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    </SafeAreaView>
  );
};
export default RegisterComponent;
