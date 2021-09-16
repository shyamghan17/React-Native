import React, {useState} from 'react';
import Container from '../../components/common/container';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Input from '../../components/common/Input';
import styles from '../../components/common/Input/styles';

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
            style={styles.wrapper}
            />
            <Input 
            lable='Password'
            style={styles.wrapper}
            placeholder="Password"/>
        </Container>
        </SafeAreaView>
    )
}
export default Login