import React,{createContext,useReducer} from 'react';
import {AppReducer} from './AppReducer'
//initial state
const initialState={
    transactions:[]
        // {id:1, desc: "Salary",amount: 1000},
        // {id:2, desc: "Salary",amount: 1000},
        // {id:3,desc: "flower",amount: -100},
        // {id: 4, desc: "Cold Drink",amount: -200},


}
//create context
export const GlobalTransaction=createContext(initialState)

//now we need to create global provider

export const GlobalProvider=({children}) =>{

// console.log(children)
   const [state,dispatch]=useReducer(AppReducer, initialState)
   
   function delTransaction(id) {
       dispatch({
           type: "DelTransaction",
           payload: id
       })
   }
   function AddTransaction(transaction) {
       dispatch({
           type: "AddTransaction",
           payload: transaction
       })    
   }
   return(
       <GlobalTransaction.Provider value={{
           transactions: state.transactions,
           delTransaction,
           AddTransaction
       }}>
{children}
       </GlobalTransaction.Provider>
   )
}