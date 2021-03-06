import logo from './logo.svg';
import Expense from './components/Expense/Expense';
import './App.css';
import HomepageWrapper from './components/HomepageWrapper/HomepageWrapper';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import { useCallback, useContext, useMemo, useState } from 'react';
import ExpenseList from './components/ExpenseList/ExpenseList';
import UserLoginForm from './components/Authentication/UserLogin/UserLoginForm';
import Dashboard from './components/Dashboard/Dasboard';
import AuthContext from './store/AuthContext/AuthContext';
import { ThemeConsumer } from 'styled-components';
import ThemeContext from './store/Theme/ThemeContext';
import Dummy from './components/Dummy/Dummy';
import Button from './components/Button/Button';
import Dropdown from './components/Dropdown/Dropdown';
import UseMemoLsExample from './components/UseMemoCase/UseMemoLsExample';
import Demo from './components/ClassBasedComponents/Demo/Demo';
import MovieDashboard from './components/MovieDashboard/MovieDashboard';
import ErrorBoundary from './core/ErrorBoundary/ErrorBoundary';
import { IncrementCounter } from './components/Custom-Hook/Increment';
import { DecrementCounter } from './components/Custom-Hook/Decrement';
import { CustomHookExample } from './components/Custom-Hook/CustomHookExample';
import ReusableInput from './components/ReusableInput/ReusableInput';

function App() {
  let [itemList, setItemList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  let [expenseList, setExpenseList] = useState([])
  let [userLoggedIn, setUserLoggedIn] = useState();
  const ctx = useContext(ThemeContext);
  let [theme, setTheme] = useState('dark');
  let [showMessage, setShowMessage] = useState(false);
  let [allowToggle, setAllowToggle] = useState(false);
  let [dropdownLength, setDropdownLength] = useState(1);
  let [dropdownCurrentValue, setDropdownCurrentValue] = useState(1);

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

  function onConfirmationHandler(message) {
    alert(message);
  }

  function onThemeChange(themeName) {
    setTheme(themeName)
  }

  const onMessageToggle = useCallback(() => {
    if (allowToggle) {
      setShowMessage((state) => !state)
    }
  }, [allowToggle]);

  const onAllowToggle = () => {
    setAllowToggle((state) => !state);
  }

  function onDropdownChange(newValue) {
    console.log(newValue);
    // setDropdownLength(newValue);
    setDropdownCurrentValue(newValue)
  }

  function onDeleteDropdownItem(i) {
    setDropdownCurrentValue(dropdownCurrentValue-1)
  }

  return (
    <>
    <div class="container">
    <ReusableInput/>
    </div>
    </>
  );
}

export default App;
