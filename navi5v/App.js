import React from 'react'
import {Text, View, StyleSheet,} from 'react-native'


const Names= (props)=>{
  return <Text >I'm {props.name}  mahato </Text>
  
}

const App = ()=> {
  return(
    <View style ={styles.container}>
    <Names name ='ghanshyam'/>
    <Names name ='Rinku'/>
    <Names name ='shaunak'/>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})

export default App