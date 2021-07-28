import React from 'react';
import { Text, StyleSheet, View, SafeAreaView, StatusBar, FlatList } from 'react-native';

const DATA =[
{
    id:'1',
    title:'suzan'
},
{
    id:'2',
    title:'sabin'
},
{
    id:'3',
    title:'samir'
},
{
    id:'4',
    title:'kushal'
}
]

// const Item= (title) =>(
// <View>
//     <Text>{title}</Text>
// </View>
// )
const RenderItem = () => {
    return (
        <FlatList data={DATA}
        renderItem={({item}) => (
            <Text>{item.title}</Text>
        )}
        />
    )

}

export default RenderItem