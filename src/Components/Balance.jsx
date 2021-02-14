import React,{useContext} from 'react'

import {GlobalTransaction} from '../Context/ContextApi'
export const Balance = () => {
const {transactions}=useContext(GlobalTransaction)
console.log(transactions)

const maps=transactions.map((transaction) => transaction.amount)
console.log(maps)
const reduce=maps.reduce((acc,value) => (acc +=value), 0).toFixed(2)
    return (
        <div>
            <h2>Your Balance</h2>
           <h1 id="balance">${reduce}</h1>
        </div>
    )
}
