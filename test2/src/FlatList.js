import React, { Component, useState } from 'react';
import { Modal, Text, View, StyleSheet, TouchableOpacity, StatusBar, StatusBarIOS, ScrollView, RefreshControl, FlatList} from 'react-native'

const ModalExample = () => {

      const [Items, setItems] = useState([
        {name:'Item 1'},
        {name:'Item 2'},
        {name:'Item 3'},
        {name:'Item 4'},
        {name:'Item 5'},
        {name:'Item 6'},
        {name:'Item 7'},
        {name:'Item 8'},
        {name:'Item 9'},

      ])
      const [Refresh, setRefresh] = useState(false)
      const onRefresh = () =>{
        setRefresh(true);
        setItems([ ...Items,
          {name:'item 10'},
          {name:'Item 11'},   
          {name:'Item 12'},
      ]);
        setRefresh(false)
      }
 return(
   <FlatList 
   keyExtractor={(item, index) => index.toString()}
   data={Items}
   renderItem={({item})=>(
    <View style={styles.text}>
                <Text>{item.name}</Text>
    </View>
   )}
   refreshControl={
             <RefreshControl 
             refreshing={Refresh}
             onRefresh={onRefresh}
             colors={["red"]}
             />
           }
   />
//     <View style={styles.container1}>
//        <ScrollView horizontal={false}
//        refreshControl={
//          <RefreshControl 
//          refreshing={Refresh}
//          onRefresh={onRefresh}
//          />
//        }>
//       {
//         Items.map((list) =>{
//           return(
           
//             <View style={styles.text} key={list.key}>
//               <Text>{list.item}</Text>
//             </View>
           
//           )
//         })
//       }

// </ScrollView>
//     </View>
 )
}

export default ModalExample

const styles = StyleSheet.create({
  container1:{
    flex:1,
    backgroundColor:'#aaaaaf',
    marginTop:33
  }, 
   container2:{
    flexDirection:'row',
  
  },  
  container3:{
  
    justifyContent:'flex-start',
    alignItems:'stretch'
  
  },  
  container4:{
    flex:1,
    justifyContent:'flex-start',
    flexDirection:'row',
    alignItems:'stretch'

  },

  view1:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    height:50,
    backgroundColor:'#900100'

  },
  view2:{
    justifyContent:'center',
    alignItems:'center',
    flex:2,
    height:50,
    backgroundColor:'#900967'

  },
  view3:{
    flex:3,
    alignItems:'center',
justifyContent:'center',
    height:50,
    backgroundColor:'#676723'
  },

  viewRow1:{

    justifyContent:'center',
    alignItems:'center',
    height:50,
    backgroundColor:'red'

  },
  viewRow2:{

    justifyContent:'center',
    alignItems:'center',
    height:50,
    backgroundColor:'lightgreen'

  },

  viewRow3:{

    justifyContent:'center',
    alignItems:'center',
   width:'50%',
    backgroundColor:'#ffffff'

  },

  viewRow4:{

    justifyContent:'center',
    alignItems:'center',
    width:'50%',
    backgroundColor:'blue'

  },
  text:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#a5fda5',
    borderRadius:4,
    borderWidth:1,
    backgroundColor:'#d0a1f1',
    margin:5,
    padding:10

  }
})