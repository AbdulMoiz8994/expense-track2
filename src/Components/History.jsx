import React,{useContext} from 'react'
import {GlobalTransaction} from '../Context/ContextApi'

export const History = () => {

    const {transactions,delTransaction}=useContext(GlobalTransaction)
    // console.log(delTransaction)
    // const sign=transactions.amount < 0 ? "-" : "+";
    return (
        <div>
            <h2 className="history">History</h2>
            <hr/>
            <ul className="list">
                {transactions.map((transaction) =>{
                   return(
                 <li className={transaction.amount < 0 ? "minus" : "plus"} key={transaction.id}>
                    {transaction.desc} <span>{transaction.amount < 0 ? "-" : "+"}${Math.abs(transaction.amount)} <button onClick={() => delTransaction(transaction.id)} className="list-del-btn">X</button></span>
                </li>
                   )    
                })}
            </ul>
        </div>
    )
}
