
import { StyleSheet } from 'react-native'
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
    logoImage:{
       height:150,
       width:300,
       alignSelf:'center',
       marginTop:20,
       
   },
   title:{
       fontSize:21,
       textAlign:'center',
       fontWeight:'500',
       paddingTop:20

   },
   subTitle:{
       fontSize:17,
       textAlign:'center',
       fontWeight:'500',
       paddingVertical:20,
   },
   loginForm:{
       paddingTop:20
   },
   createSection:{
      flexDirection:'row'

   },
   linkBtn:{
       paddingLeft:17,
       color:colors.primary,
       fontSize:16,

   },
   infoText:{
       fontSize:17
   }
});