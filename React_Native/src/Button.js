import React, { useState } from "react";
import { View, Text, ActivityIndicator,SafeAreaView, Button, Alert, StyleSheet } from "react-native";


const Seperator = () => (
    <View style={styles.Seperator}/>
)
const Rough = () => {

  return (
 <SafeAreaView style={styles.container}>

            <View>
                <Text style={styles.title}>The title and onPress handler are required. It is recommended to set accessibilityLabel to help make your app usable by everyone.</Text>
                <Button title='press me' onPress={()=> Alert.alert('simple button pressed')}/>
            </View>
 <Seperator/>
            <View>
                <Text style={styles.title}>
                Adjust the color in a way that looks standard on each platform.
                On  iOS, the color prop controls the color of the text. On Android,
                the color adjusts the background color of the button.
                </Text>
                <Button title="press me" color='coral' onPress={()=> Alert.alert('Button with adjusted color is pressed')}/>
            </View>
<Seperator/>
            <View>
                <Text style={styles.title}>
                All interaction for the component are disabled.
                </Text>
                <Button title='press me' disabled onPress={()=> Alert.alert('All intraction is dissabled')}/>
            </View>
<Seperator/>

            <View>
            <Text style={styles.title}>
                This layout strategy lets the title define the width of the button.
            </Text>

           
            <View style={styles.fixToText}>
                
                <Button title ="Left button" onPress={()=> Alert.alert("left button pressed")}/>
                <Button title ="Right button" onPress={()=> Alert.alert("right button pressed")}/>
            </View>
            </View>


 </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginHorizontal:16,
  },
  title:{
      textAlign:'center',
      marginVertical:8,
  },

  fixToText:{
      flexDirection:'row',
      justifyContent:'space-between'
  },
  Seperator:{
      marginVertical:8,
      borderBottomColor:'#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
  }
});

export default Rough;