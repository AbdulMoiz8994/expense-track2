import React,{useContext} from 'react'
import {GlobalTransaction} from '../Context/ContextApi'

export const InComeAndExpense = () => {

    const {transactions}=useContext(GlobalTransaction)
    console.log(transactions)
    const totoalAmount=transactions.map((amounts) => amounts.amount)
    console.log(totoalAmount)
    const income=totoalAmount.filter((values) => values > 0).reduce((acc,value) => acc +=value).toFixed(2)
    console.log(income)
    const expense=totoalAmount.filter((nub) => nub < 0).reduce((acc,value) => acc += value).toFixed(2)
 console.log(expense)

    return (
        <div className="income-expense">
            <div>
            <h4>Income</h4>
            <p className="moneyplus">${income}</p>
            </div>
            <div>
            <h4>Expense</h4>
            <p className="moneyminus">${expense}</p>
            </div>
        </div>
    )
}
