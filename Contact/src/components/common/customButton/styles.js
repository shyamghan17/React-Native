
import { StyleSheet } from 'react-native'
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({

    wrapper:{
       height:42,
       borderRadius:6,
       borderWidth:1,
        paddingHorizontal:5,
        marginVertical:5,
        alignItems:'center',
    justifyContent:'space-evenly'
   },
   textInput:{
       flex:1,
       width:'100%'
      
     
   },
   inputContainer:{
       paddingVertical:12,
       
   },
   error:{
       color:colors.danger,
       paddingTop:4,
       fontSize:12,
   },
   loadingSection:{
       flexDirection:'row',
   },
});