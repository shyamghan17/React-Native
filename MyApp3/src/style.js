import { StatusBar, StyleSheet } from 'react-native';

 

export default StyleSheet.create({
    container:{
        flex:1,
        paddingTop:StatusBar.currentHeight,
        alignItems: 'center',
      
    },
    scrollView:{
         flex:1,
         backgroundColor:'#5f9ea0',
    },
    testInput:{
        width:'90%',
        height:50,
        borderColor:"#232323",
        borderRadius:4,
        borderWidth:1,
        paddingLeft:20,
        margin:10,
        fontWeight:'300'
    },
    Logo:{
        height:100,
        width:100,
    },
    button:{
        height:50,
        width:'90%',
        margin:10,
        backgroundColor:'#008b8b',
        borderWidth:1,
        borderRadius:4,
        alignItems:'center',
        justifyContent:'center'
    }
})