import React from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'


class HellloWorld extends React.Component{
    render(){
        return(
            <View style={styles.StyleSheet}>
                <Text>
                    Hello, World
                </Text>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    hello:{
        fontSize:20,
        textAlign:'center',
        margin:10

    }
})
AppRegistry.registerComponent(
    'MyReactNativeApp',
    () => HellloWorld
)