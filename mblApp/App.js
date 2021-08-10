import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import {Text, View, StyleSheet, ScrollView, Animated,TouchableOpacity, SafeAreaView, ImageBackground} from 'react-native'


const App = () => {
  
const fadeAnim = useRef(new Animated.Value(0)).current;

const fadeIn =()=> {
  Animated.timing(fadeAnim,{
    toValue:1,
    duration:5000,
    useNativeDriver: true,
  }).start()
}

const fadeOut = ()=>{
  Animated.timing(fadeAnim,{
    toValue:0,
    duration:5000,
    useNativeDriver: true,
  }).start()
}
  
  return(
  
     
      <SafeAreaView style={styles.container}>
        <Animated.View style={{ flex:4, alignItems:'center', backgroundColor: "powderblue", opacity:fadeAnim}}>
            <ScrollView>
            <ImageBackground style={styles.image} source={require('./src/image6.png')}/>
            <ImageBackground style={styles.image} source={require('./src/image1.png')}/>
            <ImageBackground style={styles.image} source={require('./src/image2.png')}/>
            <ImageBackground style={styles.image} source={require('./src/image3.png')}/>
            <ImageBackground style={styles.image} source={require('./src/image5.png')}/>
            <ImageBackground style={styles.image} source={require('./src/image7.png')}/>
            <ImageBackground style={styles.image} source={require('./src/image.png')}/>
            </ScrollView>
      
        <Text  style={styles.text1}> Kakku miss you Shaunak</Text>
        </Animated.View>

          <View style={{flex:2, marginTop:20}}>

        <TouchableOpacity style={styles.text}onPress={fadeIn}>
            <Text>Click Me! to Show</Text>
            </TouchableOpacity>
          <TouchableOpacity  style={styles.text} title="fade out " onPress={fadeOut}>
          <Text>Click Me! to Hide</Text>
            </TouchableOpacity>
          </View>
      </SafeAreaView>
  
  )


}



const styles = StyleSheet.create({
  container:{
    paddingTop:20,
    backgroundColor:'#ba55d3',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    backgroundColor:'#db7093',
    borderWidth:2,
    margin:10,
    padding:10,
    borderRadius:4,
    borderColor:'#232323'
  },
  image:{
    height:400,
    width:300,
    borderRadius:8,
    margin:8

  },
  text1:{
      color:'red',
      fontSize:20,
  }
})

export default App