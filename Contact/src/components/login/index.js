import React, {useState} from 'react';
import {Text} from 'react-native'
import Container from '../../components/common/container';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Input from '../../components/common/Input';
import CustomButton from '../../components/common/customButton';

const LoginComponent = ()=>{  
    const [value, onChangeText] = useState('');

    return(
        <SafeAreaView>
        <Container>

            <Input
            lable="Username"
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
            <CustomButton secondary loading dissabled={true} title='Submit'/>
            <CustomButton secondary loading dissabled={false} title='Click Me'/>
            <CustomButton primary loading dissabled={true} title='Submit'/>
            <CustomButton danger loading dissabled={false} title='Submit'/>

        </Container>
        </SafeAreaView>
    )
}
export default LoginComponent 
