import React from 'react'
import { Text, View, SectionList, StyleSheet, Alert } from 'react-native'


const styles = StyleSheet.create ({

container:{
    paddingTop:22,
    // flex:1
},
sectionHeader:{
    paddingTop:2,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:2,
    fontSize:14,
    fontWeight:'bold',
    backgroundColor:'rgba(247,247,247,1.0)'

},
item:{
    padding:10,
    fontSize:18,
    height:44,
}

})

const SectionListBasis =() => {
    return (
        
<View style={styles.container}>
<SectionList sections={[
    {title:'G', data: ['ghanshyam',]},
    {title:'S', data: ['shaunak','sabita', 'santosh']},
    {title:'R', data: ['radha', 'rinku']}
]}
renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
renderSectionHeader={({section})=> <Text style={styles.sectionHeader}>{section.title}</Text>}
keyExtractor= {(item, index) => index}
/>
</View>
)}

 export default SectionListBasis