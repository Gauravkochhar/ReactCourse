import logo from './logo.svg';
import Expense from './components/Expense/Expense';
import './App.css';
import HomepageWrapper from './components/HomepageWrapper/HomepageWrapper';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import { useState } from 'react';
import ExpenseList from './components/ExpenseList/ExpenseList';

function App() {
  let [expenseList, setExpenseList] = useState([])

  function onNewExpenseAdded(newExpense) {
    setExpenseList([newExpense, ...expenseList]);

  }

  return (
    <>
    <HomepageWrapper className="main-wrapper">
    <ExpenseForm notifyToParent={onNewExpenseAdded}/>
    <ExpenseList expenseList={expenseList}/>
    </HomepageWrapper>
    </>
  );
}

export default App;
