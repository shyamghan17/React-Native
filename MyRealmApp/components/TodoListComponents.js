 
import React, { Component } from 'react'
import { Text, FlatList, TouchableOpacity, StyleSheet, Alert, View} from 'react-native'
import { deleteTodoList, updateTodoList } from '../database/allSchemas'
import { updateTodoList, deleteTodoList, queryAllTodoLists} from '../database/allSchemas'
import Swipeout from 'react-native-swipeout'
import realm from '../database/allSchemas'

let FlatListItem = props =>{
const {itemIndex, id, name, creationDate, PopupDialogComponent, onPressItem} =props
    showEditModal= () =>{
    }
     showDeleteConfirmation= ()=>{
         Alert.alert('Delete',
         'Delete a todoList',
         [
             {
                 text:'No', onPress:() =>{},
                 style:'cancel'
             },
             {
                 text:'Yes', onPress:() =>{

                 }
             }
         ]
         {cancelable:true})
     }   
    return(
        <Swipeout right ={[
            {
            text:'Edit',
            backgroundColor:'rgb(81, 134, 237)',
            onPress: showEditModal
        },
        {
            text: 'Delete',
            backgroundColor:'rgb(217, 80, 64)',
            onPress: showDeleteConfirmation
        }

        ]} autoClose={true} >

        </Swipeout>
    )
}

export default class TodoListComponet extends Component {

    constructor(props) {
        super(props)
        this.state={
            todoLists:[]
        }
    }

    reloadData = () =>{
        queryAllTodoLists().then((todoLists) =>{
            this.setState({todoLists:todoLists})

        }).catch((error) =>{
                this.setState({todoLists:[]})
        })
        console.log(`reloadData`)
    }
    render (){
        return(
            <View>
                <HeaderComponent/>
                <FlatList 
                    style={StyleSheet.container}
                    data = {this.state.todoLists}
                    renderItem = {({item, index})=><FlatListItem{...item} itemIndex = {index}
                    PopupDialogComponent = {this.refs.PopupDialogComponent}
                onPressItem={() => {
                    alert(`you pressed item`)
                }} />
                }
                keyExtractor = {item => item.id}
                    />
                    <PopupDialogComponent ref = {'popupDialogComponent'}/>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
 flex:1, 
 flexDirection:'column',
 justifyContent:'flex-start'
    },
flatList:{
    flex:1,
    flexDirection:'column'
}

})

