import React from 'react'

export const AddTransaction = () => {
    return (
        <div>
            <h2>Add New Transaction</h2>
            <hr/>
            <div className="form-control">
<label htmlFor="text">Text</label>
<input type="text" placeholder="Enter Text..."/><br/>

<label htmlFor="amount">Amount <br/>
{/* (negative-expense,positive-income) */}
</label>
<input type="number" placeholder="Enter Amount..."/>

            </div>
            <button className="btn">Add Transaction</button>
        </div>
    )
}
