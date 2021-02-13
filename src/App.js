import React from 'react'
import './App.css';
//import Components
import {Header} from  './Components/Header'
import {Balance} from './Components/Balance'
import {InComeAndExpense} from './Components/InComeAndExpense'
import {AddTransaction} from './Components/AddTransaction'
import {History} from './Components/History'


import {GlobalProvider} from './Context/ContextApi'
function App() {
  return (
    <div>
      <GlobalProvider>
      <Header heading="Expense Track By Abdul Moiz"/>
     <Balance/>
     <InComeAndExpense/>
     <History/>
     <AddTransaction/>
     </GlobalProvider>
    </div>
  );
}

export default App;
