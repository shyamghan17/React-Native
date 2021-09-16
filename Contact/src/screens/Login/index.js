import React, {useState} from 'react';
import {Text} from 'react-native'
import Container from '../../components/common/container';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Input from '../../components/common/Input';

const Login = ()=>{  
    const [value, onChangeText] = useState('');

    return(
        <SafeAreaView>
        <Container>

            <Input
            lable="Username"
            onChangeText={text => onChangeText(text)}
            value={value}
            placeholder="User Name"
            icon={<Text>HIDE</Text>}
            iconPosition='right'
            // error ='This Field is required'
            />

<Input
            lable="Password"
            onChangeText={text => onChangeText(text)}
            value={value}
            placeholder="Password"
            icon={<Text>HIDE</Text>}
            iconPosition='right'
            />
        </Container>
        </SafeAreaView>
    )
}
export default Login