import React,{useState} from 'react';
import {ActivityIndicator, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../../assets/theme/colors';
import styles from './styles';


const CustomButton = ({onPress, title, dissabled, loading, secondary, danger, primary, ...props})=>{

    // const [focused, setFocused] = useState(false)

         const getBackgroundColor =()=>{

                if (dissabled){
                    return colors.gray
                }
                 if(primary ){
                     return colors.primary
                 }
                 if(danger){
                     return colors.danger
                 }
                 if (secondary){
                     return colors.secondary
                 }
            
         }
    return(

    <TouchableOpacity 
    style={[styles.wrapper, {backgroundColor:getBackgroundColor()}]}
    // loading={loading}
    // disabled={dissabled}
    onPress={onPress}
   
    >
         <View style={styles.loadingSection}>
             {loading && <ActivityIndicator color={primary ? colors.secondary : colors.primary} />}
             {title && <Text style={{color:dissabled? 'balck' : 'white', paddingLeft: loading?5:0}}>{title}</Text>}
         </View>
    </TouchableOpacity>   

    )}
export default CustomButton