import React, { Component } from "react";
import { View, Text, StyleSheet,icon } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'



class ContactUs extends Component {
  render() {
    return (

      
<View style={styles.container}>
        
        <Text style={{fontSize:30, fontWeight:'bold', color:'coral', textAlign:'center',marginBottom:10}}>Kontakt</Text>
        <Text style={{fontSize:18, fontWeight:'500', textAlign:'center'}}>Our team will be happy to help you</Text>
        <View
  style={{
    width:"70%",
    margin:15,
    borderBottomColor: 'red',
    borderBottomWidth: 3,
  }}
/>

<View style={[ {flexDirection: "column"}]}>



<View style={styles.column}><MaterialIcons name="email" style={{fontSize:40, color:'steelblue'}}/>
<Text style={styles.iconName}>Email Us</Text>
<Text style={styles.details}>info@rufmich.de</Text>
</View>
  
<View style={styles.column}><MaterialIcons name="phone" style={{fontSize:40, color:'lightgreen'}}/>
<Text style={styles.iconName}>Phone Number</Text>
<Text style={styles.details}>+49 1520 8644791</Text></View>

<View style={styles.column}><MaterialIcons name="my-location" style={{fontSize:40, color:'orange'}}/>
<Text style={styles.iconName}>Address</Text>
<Text style={styles.details}>Neue Grünstr. 38 , 10179 Berlin</Text></View>
    </View>

    

      </View>
    );
  }
}
export default ContactUs;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 10,
    marginTop:50,
   alignItems:'center'
  
  },
  column:{
    flexDirection: "column", 
    alignItems:'center',
    marginTop:'5%'
  },
  iconName:{
    fontSize:30,
    fontWeight:'500'
  },
  details:{
    fontSize:18,
  }
});
