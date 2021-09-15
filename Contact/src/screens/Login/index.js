import React from 'react';
import { View,Text, TextInput } from 'react-native';
import Container from '../../components/common/container';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Input from '../../components/common/Input';

const Login = ()=>{
    const isLoggedIn = true;

    return(
        <SafeAreaView>
        <Container>
            <Text>
                this is login screen
            </Text>
            <Input/>
            <Input/>
        </Container>
        </SafeAreaView>
    )
}
export default Login