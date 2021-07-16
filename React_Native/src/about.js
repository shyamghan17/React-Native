import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView  } from "react-native";

class AboutUs extends Component {
  render() {
    return (

      
      <View style={styles.container}>
        <Text style={{fontSize:24, fontWeight:'bold', color:'coral', textAlign:'center',marginBottom:5}}>Welcome to UZI</Text>
        <Text style={{fontSize:18, fontWeight:'500', textAlign:'center'}}>We will provide you the right candidate</Text>
        <View
  style={{
    width:"70%",
    margin:15,
    borderBottomColor: 'red',
    borderBottomWidth: 3,
  }}
/>

<ScrollView style={{marginRight:5}}>
<Text style={{fontSize:14, textAlign:'justify',marginBottom:10, marginRight:1}}>At UIZ, we believe in technology and international collaboration to change the face of the world.
 UIZ is international BPO Service for Virtual Employee,
  Web Development, SEO Services, Mobile application development, Call Center Services.</Text>

<View style={[ {flexDirection: "row", textAlign:'justify'}]}>


<View style={styles.column}><Text style={[styles.box, {color:'green'}]}>100</Text>
<Text>Active Projects</Text></View>
  
<View style={styles.column}><Text style={[styles.box, {color:'steelblue'}]}>100%</Text>
<Text>Customer Feedback</Text></View>

<View style={styles.column}><Text style={[styles.box, {color:'skyblue'}]}>500</Text>
<Text>Active Freelancers</Text></View>
    </View>

    <View style={[ {flexDirection: "column", marginBottom:40}]}>
      
      <Text style={[styles.box, {color:'#F5B041'}]}>Creativity</Text>
<Text>We search for innovative choices that will get the best outcomes. Learning is steady. So, we generally accomplish more, and improve.</Text>
<Text style={[styles.box, {color:'#C39BD3'}]}>Employee Benefit</Text>


<Text>Guaranteeing that we have a different labor force where our kin has a protected, moral, and reasonable work environment and arrive at their maximum capacity.</Text>
<Text style={[styles.box, {color:'#73C6B6'}]}>Flexibility</Text>


<Text>We don't go through an emergency when change occurs: we perceive the difficulties and transform them into promising circumstances.</Text>
<Text style={[styles.box, {color:'#82E0AA'}]}>Respect</Text>

<Text>We regard your worth. So we perceive prerequisites, and become acquainted with ourselves well to put forth a valiant effort.</Text>

</View>
</ScrollView>

      </View>
    );
  }
}
export default AboutUs;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 5,
    marginTop:50,
   alignItems:'center'
  },
  box:{
fontSize:30,
fontWeight:'bold',
padding:10
  },
  column:{
    flexDirection: "column", 
    alignItems:'center',
    padding:5,
    margin:1
  }
});
