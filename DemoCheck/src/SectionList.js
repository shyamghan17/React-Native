import React, { Component, useState } from 'react';
import { Modal, Text, View, StyleSheet, TouchableOpacity, StatusBar, StatusBarIOS, ScrollView, RefreshControl, FlatList, SectionList} from 'react-native'

const App = () => {

  const [Sections, setSections] = useState([
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2'],
    },
  ]);
  const onRefresh = () => {
    setRefreshing(true);
    const adding_index = Sections.length + 1;
    setSections([...Sections,
    {
      title: 'Title ' + adding_index,
      data:
        [
          'Item ' + adding_index + '-1',
          'Item ' + adding_index + '-2'
        ],
    }
    ]);
    setRefreshing(false);
  }
  const [Refreshing, setRefreshing] = useState(false);

 return(
  <SectionList
  keyExtractor={(item, index) => index.toString()}
  sections={Sections}
  renderItem={({ item }) => (
    <View style={styles.item}>
      <Text style={styles.text_item}>{item}</Text>
    </View >
  )}
  renderSectionHeader={({ section }) => (
    <View style={styles.text}>
      <Text style={styles.text}>{section.title}</Text>
    </View>
  )}
  refreshControl={
    < RefreshControl
      refreshing={Refreshing}
      onRefresh={onRefresh}
    />
  }
/>
 )
}

export default App

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