import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity  } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntIcon from "react-native-vector-icons/AntDesign";


class ContactUs extends Component {
    render() {
          return (

            
            <View style={styles.container}>
                  
                  <Text style={[style=styles.icons,{ textAlign:'center',marginBottom:10}]}>Contact Us</Text>
                  <Text style={styles.iconName}>Our team will be happy to help you</Text>
                <View style={{ width:"70%", margin:15, borderBottomColor: '#010101', borderBottomWidth: 3, }}/>

                <View style={[ {flexDirection: "column"}]}>

                        <View style={styles.column}><MaterialIcons name="email" style={styles.icons}/>
                          <Text style={styles.iconName}>Email Us</Text>
                          <Text style={styles.details}>info@rufmich.de</Text>
                        </View>
                          
                        <View style={styles.column}><MaterialIcons name="phone" style={styles.icons}/>
                          <Text style={styles.iconName}>Call us</Text>
                          <Text style={styles.details}>+49 1520 8644791</Text>
                        </View>

                        <View style={styles.column}><MaterialIcons name="my-location" style={styles.icons}/>
                          <Text style={styles.iconName}>Address</Text>
                          <Text style={styles.details}>Neue Grünstr. 38 , 10179 Berlin</Text>
                        </View>

                </View>

                  <TouchableOpacity 
                    style={styles.button}
                    onPress={()=>this.props.navigation.goBack()}>
                      <AntIcon name="home" color={'#010101'} size={25} />
                      
                    <Text style={styles.details}>Home</Text>
                  </TouchableOpacity>


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
    fontSize:20,
    fontWeight:'bold',
    color:'#2b2727',
   },
   icons:{     
    color:'#010101',
    fontSize:30,
    fontWeight:'bold',
   },

  details:{
    fontSize:18,
    paddingLeft:10,
    textAlign:'justify'   
  }, 
  button:{
    alignItems:'center',
    marginTop:40,
    paddingVertical:20,
    paddingHorizontal:60,
    backgroundColor:'#fff',
    borderRadius:4,
    borderColor:'#2b2727',
    borderWidth:1,
    flexDirection:'row'
  }
});
