import React, {useState} from 'react';
import {Text} from 'react-native'
import Container from '../../components/common/container';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Input from '../../components/common/Input';
import CustomButton from '../../components/common/customButton';
import LoginComponent from '../../components/login';
const Login = ()=>{  
    const [value, onChangeText] = useState('');

    return(
        <LoginComponent/>
    )
}
export default Login