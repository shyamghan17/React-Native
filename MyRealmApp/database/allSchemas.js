import { promises } from 'fs';
import { resolve } from 'path';
import Realm from 'realm'
export const TODOLIST_SCHEMA = "TodoList";
export const TODO_SCHEMA = "Todo"

export const TodoSchema ={
    name:TODO_SCHEMA,
    primaryKey:'id',
    properties: {
        id:'int',
        name:{type:'string', indexed: true},
        done:{type: 'bool', default:false}
    }
}
export const TodoListSchema = {
    name:TODOLIST_SCHEMA,
    primaryKey:'id',
    properties: {
        id:'int',   
        name:'string',
        creationData:'date',
        todos:{type:'list', objectType: TODO_SCHEMA},
    }
}

const databasOption = {
    path:'todoListApp.realm',
    schema: [TodoListSchema, TodoSchema],
    schemaVersion:0, // optional;
}

export const insertNewTodoList = newTodoList => new Promise((resolve, reject) =>{
    Realm.open(databasOption).then(realm=> {
        realm.write(() => {
            realm.create(TODOLIST_SCHEMA, newTodoList)
            resolve(newTodoList)
        })

    }).catch((error)=> reject(error))
})

export const updateTodoList = todoList => new Promise((resolve, reject) => {
    Realm.open(databasOption).then(realm => {
        realm.write(() => {
            let updateTodoList = realm.objectForPrimaryKey(TODOLIST_SCHEMA, todoList.id)
            updateTodoList.name = todoList.name
            resolve()
        })


    }).catch((error)=> reject(error))
})

export const deleteTodoList = todoListId => new Promise(( resolve,  reject) =>{
    Realm.open(databasOption).then(realm => {
        realm.write(() => {
            let deleteTodoList = realm.objectForPrimaryKey(TODOLIST_SCHEMA, todoListId)
            realm.delete(deleteTodoList)
            resolve()
        })
    }).catch((error)=> reject(error))
})

export const deleteAllTodoLists = ()=> new Promise((resolve, reject)=> {
    Realm.open(databasOption).then(realm=> {
        realm.write(() =>{
            let allTodoLists = realm.objects(TODOLIST_SCHEMA)
            realm.delete(allTodoLists)
            resolve
        })
    }).catch((error)=> reject(error))
})

export const queryAllTodoLists = () => new Promise((resolve, reject) =>{
    Realm.open(databasOption).then(realm =>{
        let allTodoLists = realm.objects(TODOLIST_SCHEMA)
        resolve(allTodoLists)
    }).catch((error) =>{
        reject(error)
    })
})

export default new Realm(databasOption)