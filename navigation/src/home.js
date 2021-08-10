import React from 'react'
import {View, StyleSheet, Text,Image, TouchableOpacity} from 'react-native'
import { createSwitchNavigator } from 'react-navigation';

const App = ()=>  {
  
    return <MyNavigator/>;
  
}

const ScreenComponentOne = (props)=>{
  
  return(
             
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        borderWidth: 10,
        borderColor: 'teal',
        alignItems:'center'
      }}>
          <Image
            style={styles.image}
            source={require('./image3.png')}

          />
            <TouchableOpacity 
              style={styles.touchableOpacity}
              onPress={() =>{props.navigation.navigate('routeNameTwo')}}>
              <Text>go to screen Two</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.touchableOpacity}
              onPress={() =>{props.navigation.navigate('routeNameThree')}}>
              <Text>go to screen Three</Text>
            </TouchableOpacity>
    </View>   
  )
}



const ScreenComponentTwo= (props)=> {
   return(
         
    <View 
      style={{
        flex: 1,
        justifyContent:'flex-end',
        borderWidth: 10,
        borderColor: 'orange',
        alignItems:'center'
      }}>

      <Image style={styles.image}
        source={require('./image6.png')}
      />    
      <TouchableOpacity 
        style={styles.touchableOpacity}
        onPress={() =>{props.navigation.navigate('routeNameOne')}}>
        <Text>go to screen one</Text>
      </TouchableOpacity>
    </View>
     
  )
}
const ScreenComponentthree= (props)=>{
  return(
    <View 
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        borderWidth: 10,
        borderColor: 'green',
        alignItems:'center'
      }}>
        <Image
          style={styles.image}
          source={require('./image1.png')}
        />
          
        <TouchableOpacity 
          style={styles.touchableOpacity}
          onPress={() =>{props.navigation.navigate('routeNameTwo')}}>
          <Text>go to screen Two</Text>
        </TouchableOpacity>
    </View>
  )
}

const MyNavigator = createSwitchNavigator({
  routeNameOne: ScreenComponentOne,
  routeNameTwo: ScreenComponentTwo,
  routeNameThree: ScreenComponentthree,
});



const styles= StyleSheet.create({  
  border:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    borderWidth:25,
    borderRadius:5, 


  },
  touchableOpacity:{
    padding:10,
    backgroundColor:'#fff',
    borderWidth:2,
    borderRadius:4,
    borderColor:'green',justifyContent: 'flex-end',
  },
  image:{
    height:400,
    width:300,
  },
})
export default App