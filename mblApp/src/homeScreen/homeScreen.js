import React from 'react'
import {View,Button, Text, StyleSheet} from 'react-native'
import {createSwitchNavigator} from 'react-navigation'


class ScreenComponentOne extends React.Component{
    render () {
        return(
          <View style={styles.constainer}>
              <View style={ styles.border}>
              <Button title='go to screen one' onPress={() =>{
                  this.props.navigate('RouteNameTwo')
              } }/>
              </View>
          </View>
        )
      }
}


const AppNavigator = createSwitchNavigator({
    RouteNameOne: ScreenComponentOne,
})

export default class App extends React.Component{
    render() {
        return <AppNavigator/>

    }
}


const styles= StyleSheet.create({
  constainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
  },
  border:{

    height:400,
    width:300,
    borderWidth:3,
    borderRadius:5,
    borderColor:'#eee',
    backgroundColor:'green'

  }
})
