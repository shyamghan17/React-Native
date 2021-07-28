import { isTemplateElement } from '@babel/types'
import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'



const FrindList=[
    {   
        id:1,
        name:'aadarsh',
        age:25
    },
    {
        id:2,
        name:'manish',
        age:15
    },
    {
        id:3,
        name:'parma',
        age:45
    },
    {
        id:4,
        name:'chanchal',
        age:10
    },
    {
        id:5,
        name:'mukes',
        age:25
    },
    {
        id:6,
        name:'sandeep',
        age:30
    }
]

const Helllo=()=> {
    return(

        <FlatList  data={FrindList}
        renderItem={({item}) => (

            <Text style={styles.FlatList}>Age:{item.age}, Name:{item.name}</Text>
        )}       
        />
    )}

    
const styles = StyleSheet.create({
    FlatList:{
        backgroundColor:'coral',
        padding:20,
        margin:10,
    }
})
    export default Helllo