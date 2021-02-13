import React,{useState,useContext} from 'react'

import {GlobalTransaction} from '../Context/ContextApi'

export const AddTransaction = () => {
let [desc, setDesc]=useState("")
let [amount, setAmount]=useState(0)

const {AddTransaction}=useContext(GlobalTransaction)
console.log(AddTransaction)

function onSubmit(e) {

   console.log(desc, amount)
   e.preventDefault()

  const AddInput={
        desc,
      amount: Number( amount)

  }
AddTransaction(AddInput)
}


    return (
        <div>
            <h2>Add New Transaction</h2>
            <hr/>
            <form onSubmit={onSubmit}>
            <div className="form-control" >
    
<label htmlFor="text">Text</label>
<input type="text" placeholder="Enter Text..." value={desc} onChange={(e) => setDesc(e.target.value)}/><br/>

<label htmlFor="amount">Amount <br/>
{/* (negative-expense,positive-income) */}
</label>
<input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount..."/>

            </div>
            <button type="submit" className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
