export const AppReducer=((state,action)=>{
    switch (action.type) {
        
        case "DelTransaction":
            return {
                ...state,
                transactions: state.transactions.filter(( transaction) => transaction.id !== action.payload)
            }
    
        case "AddTransaction":
            return {
                ...state,
               transactions:  [action.payload,...state.transactions], 
               }
        default:
           return state
    }
})