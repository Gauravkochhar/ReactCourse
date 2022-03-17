import logo from './logo.svg';
import Expense from './components/Expense/Expense';
import './App.css';
import HomepageWrapper from './components/HomepageWrapper/HomepageWrapper';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import { useState } from 'react';
import ExpenseList from './components/ExpenseList/ExpenseList';
import UserLoginForm from './components/Authentication/UserLogin/UserLoginForm';
import Dashboard from './components/Dashboard/Dasboard';

function App() {
  let [itemList, setItemList] = useState([1,2,3,4,5,6,7,8,9,10]);
  let [expenseList, setExpenseList] = useState([])
  let [ userLoggedIn, setUserLoggedIn ] = useState();

  function onNewExpenseAdded(newExpense) {
    setExpenseList([newExpense, ...expenseList]);

  }

  function onDeleteExpense(expenseId) {
    const newExpenseList = expenseList.filter(expenseItem => expenseItem.id !== expenseId)
    setExpenseList(newExpenseList);
  }

  function updateLoginState(loginState) {
    setUserLoggedIn(loginState);
  }

  return (
    <HomepageWrapper className="main-wrapper"> 
    { !userLoggedIn ? <UserLoginForm updateLoginState={updateLoginState}></UserLoginForm>: ''}
    { userLoggedIn ? <Dashboard></Dashboard>: ''}
    {/* <ExpenseForm notifyToParent={onNewExpenseAdded}/>
    <ExpenseList expenseList={expenseList} onDeleteExpense={onDeleteExpense}/> */}
    </HomepageWrapper>
  );
}

export default App;
