import React from 'react'
import {View, Text, StyleSheet } from 'react-native'

const LayoutDesignd = () => {
    return (
<View>

    <Text>hello </Text>
<View style={styles.ssmall}></View>
<View style = {styles.mmedium}></View>
<View style = {styles.llarge}></View>
</View>
        
    )
}


const styles = StyleSheet.create ({

ssmall:{
    height:50,
    width:50,
    backgroundColor:'powderblue'
},

mmedium:{
    height:100,
    width:100,
    backgroundColor:'skyblue'
},
llarge:{
height:150,
width:150,
backgroundColor:'steelblue'}
})

export default LayoutDesignd