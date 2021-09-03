import React, { Component, useState } from 'react';
import { Modal, Text, View, StyleSheet, TouchableOpacity, StatusBar, StatusBarIOS} from 'react-native'

const ModalExample = () => {
   
  return(
    <View style={styles.container1}>

        <View style={styles.container2}>
          <View style={styles.view1}><Text>1</Text></View>
          <View style={styles.view2}><Text>2</Text></View>
          <View style={styles.view3}><Text>3</Text></View>
        </View> 
      <View style={styles.container3}>
      <View style={styles.viewRow1}><Text>4</Text></View>
      <View style={styles.viewRow2}><Text>5</Text></View>
      </View>

      <View style={styles.container4}>
      <View style={styles.viewRow3}><Text>4</Text></View>
      <View style={styles.viewRow4}><Text>5</Text></View>
      </View>

        
    </View>
  )
}

export default ModalExample

const styles = StyleSheet.create({
  container1:{
    flex:1,
    backgroundColor:'#aaaaaf',
    marginTop:33
  }, 
   container2:{
    flexDirection:'row',
  
  },  
  container3:{
  
    justifyContent:'flex-start',
    alignItems:'stretch'
  
  },  
  container4:{
    flex:1,
    justifyContent:'flex-start',
    flexDirection:'row',
    alignItems:'stretch'

  },

  view1:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    height:50,
    backgroundColor:'#900100'

  },
  view2:{
    justifyContent:'center',
    alignItems:'center',
    flex:2,
    height:50,
    backgroundColor:'#900967'

  },
  view3:{
    flex:3,
    alignItems:'center',
justifyContent:'center',
    height:50,
    backgroundColor:'#676723'
  },

  viewRow1:{

    justifyContent:'center',
    alignItems:'center',
    height:50,
    backgroundColor:'red'

  },
  viewRow2:{

    justifyContent:'center',
    alignItems:'center',
    height:50,
    backgroundColor:'lightgreen'

  },

  viewRow3:{

    justifyContent:'center',
    alignItems:'center',
   width:'50%',
    backgroundColor:'#ffffff'

  },

  viewRow4:{

    justifyContent:'center',
    alignItems:'center',
    width:'50%',
    backgroundColor:'blue'

  },
})