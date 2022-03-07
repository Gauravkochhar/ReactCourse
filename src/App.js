import logo from './logo.svg';
import Expense from './components/Expense/Expense';
import './App.css';
import HomepageWrapper from './components/HomepageWrapper/HomepageWrapper';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import { useState } from 'react';
import ExpenseList from './components/ExpenseList/ExpenseList';

function App() {
  let [itemList, setItemList] = useState([1,2,3,4,5,6,7,8,9,10]);
  let [expenseList, setExpenseList] = useState([])

  function onNewExpenseAdded(newExpense) {
    setExpenseList([newExpense, ...expenseList]);

  }

  function onDeleteExpense(expenseId) {
    const newExpenseList = expenseList.filter(expenseItem => expenseItem.id !== expenseId)
    setExpenseList(newExpenseList);
  }

  return (
    <HomepageWrapper className="main-wrapper"> 
    <ExpenseForm notifyToParent={onNewExpenseAdded}/>
    <ExpenseList expenseList={expenseList} onDeleteExpense={onDeleteExpense}/>
    </HomepageWrapper>
  );
}

export default App;
