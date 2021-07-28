import React from 'react'
import { Text, StyleSheet, View } from 'react-native'


const HomeScreen =() => {

return(
    
 <Text style={styles.container}>hello this is home screen</Text>

)

};

const styles = StyleSheet.create ({

    container:{
        fontSize:30,
        textAlign:'center',
        alignItems:'center',
        color:'red',
        backgroundColor:'blue'
    }
});


export default HomeScreen