import React, {useState} from 'react';
import {Text,View, Image} from 'react-native'
import Container from '../../components/common/container';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Input from '../../components/common/Input';
import CustomButton from '../../components/common/customButton';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation} from '@react-navigation/native';
import { LOGIN, REGISTER} from '../../constants/routeName';


const LoginComponent = ()=>{  
    const {navigate} = useNavigation()

    return(
        <SafeAreaView>
        <Container>

           <Image style={styles.logoImage} source={require('../../assets/images/logos.png')} />

    <View>
        <Text style={styles.title}>Welcom To Ghanshyam Project</Text>
        <Text style={styles.subTitle}>please login here</Text>
<View style={styles.loginForm}>
    <Input
            lable="Username"
            iconPosition='right'
            placeholder='Enter Username'
            // error ='This Field is required'
            />

<Input      
            lable="Password"
            placeholder="Password"
            secureTextEntry={true}
            icon={<Text>show</Text>}
            iconPosition='right'
            
            />
            <CustomButton primary title='Submit'/>

            </View>
            <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account</Text>  

                <TouchableOpacity onPress={()=>{navigate(REGISTER)}}>
                    <Text style={styles.linkBtn}>Register</Text>
                    </TouchableOpacity>
            </View>

    </View>
        </Container>
        </SafeAreaView>
    )
}
export default LoginComponent