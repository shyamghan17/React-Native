import React, { Component } from "react";
import { View, Text,TouchableOpacity, StyleSheet} from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntIcon from "react-native-vector-icons/AntDesign";


export function DataScreen(navigation) {
    return (

      
      <View style={styles.container}>
        
        <Text style={{fontSize:24, fontWeight:'bold', color:'#010101', textAlign:'center',marginBottom:5,}}>Welcome to Rufmich</Text>
        <Text style={styles.box}>We will provide you the right candidate</Text>
        <View
  style={{
    width:"70%",
    margin:15,
    borderBottomColor: '#010101',
    borderBottomWidth: 3,
  }}
/>

<Text style={{fontSize:14, textAlign:'justify',marginBottom:8, marginRight:1}}>We prefer to work on your choice. 
Rufmich is moreover satisfied and enthusiastic about being a working monetary sponsor in our kinfolk,
   who are the key essential component of our creating illustration of conquering difficulty.
</Text>
<View style={[ {flexDirection: "row", textAlign:'justify'}]}>


<View style={styles.column}><Text style={[styles.box]}>100+</Text>
<Text>Active Projects</Text></View>
  
<View style={styles.column}><Text style={[styles.box]}>100%</Text>
<Text>Customer Feedback</Text></View>

<View style={styles.column}><Text style={[styles.box]}>500+</Text>
<Text>Active Freelancers</Text></View>
    </View>
<View style={{flexDirection: "row", textAlign:'justify'}}>
<Text style={styles.box}>What's great about us? </Text>
    </View>

    <View style={[ {flexDirection: "column", marginBottom:40}]}>


      <View style={ styles.row}>
      <MaterialIcons name='create' style ={styles.materialIconn}/>
      <Text style={styles.box}>Creativity</Text>   
      </View>
      <Text style={styles.text}>We search for innovative choices that will get the best outcomes.</Text>

      <View style={ styles.row}>
      <AntIcon name='gift' style ={styles.materialIconn}/>
      <Text style={styles.box }>Employee Benefit</Text>   
      </View>
      <Text style={styles.text}>We have different labor force where our kin has a protected, moral,
       and reasonable work environment.</Text>

      <View style={styles.row}>
      <AntIcon name='solution1' style ={styles.materialIconn}/>
      <Text style={styles.box}>Flexibility</Text>   
      </View>
      <Text style={styles.text} >we perceive the difficulties and transform them into promising circumstances.</Text>


      <View style={ styles.row}>
      <MaterialIcons name='timeline' style ={styles.materialIconn}/>
      <Text style={styles.box}>Respect</Text>   
      </View>
      <Text style={styles.text}>We regard your worth. So we perceive prerequisites, and become acquainted with ourselves well to put forth a valiant effort.</Text>

</View>

      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 5,
    marginTop:5,
    alignItems:'center'
  },
  box:{
    fontSize:18,
    fontWeight:'bold',
    color:'#2b2727',
    marginLeft:'2%'
  },
  row:{
    flexDirection:"row",
    margin:10,
    alignItems:"center"

  },
  text:{
    textAlign:'justify',
    marginLeft:'5%',
    marginRight:'2%'
  },
  materialIconn:{
    color:'#010101',
    fontSize:30,
    fontWeight:'bold',
    marginLeft:'2%'
  },
  column:{
    flexDirection: "column", 
    alignItems:'center',
    padding:5,
    margin:1
  },
  details:{
    fontSize:18,
    paddingLeft:10,
    textAlign:'justify'   
  }, 
});
