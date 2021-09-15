import React, {createContext, useReducer}from "react"
import contactInitialState from "../initialState/contactInitialState";
import auth from "./auth";
import contacts from "./contacts";
import authInitialStats from "../initialState/authState";


export const GlobalContext = createContext({});

const GlobalProvider = ({children}) =>{

    const [authState, authDispath] = useReducer(auth, authInitialStats)
    const [contactState, contactDispath] = useReducer(contacts, contactInitialState)


    return(

        <GlobalContext.Provider 
        value={{authState, contactState, authDispath, contactDispath}}>
            {children}</GlobalContext.Provider>
    )

}

export default GlobalProvider