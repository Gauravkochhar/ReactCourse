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

function App() {
  let [itemList, setItemList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  let [expenseList, setExpenseList] = useState([])
  let [userLoggedIn, setUserLoggedIn] = useState();
  const ctx = useContext(ThemeContext);
  let [theme, setTheme] = useState('dark');
  let [showMessage, setShowMessage] = useState(false);
  let [allowToggle, setAllowToggle] = useState(false);

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

  return (
    <>
      <UseMemoLsExample list={useMemo(() => [5, 3, 2, 1, 4], [])}></UseMemoLsExample>
      <Dropdown options={Array.from({ length: 10 }, (e, i) => i + 1)}></Dropdown>
      <Dummy showMessage={showMessage}></Dummy>
      <Button onClick={onMessageToggle}>Toggle Message</Button>
      <Button onClick={onAllowToggle}>Allow Toggle</Button>
      <ThemeContext.Provider value={{ theme: theme, onThemeChange: onThemeChange }}>
        <HomepageWrapper className={`main-wrapper ${ctx.theme}`}>
          <AuthContext.Provider value={{ isLoggedIn: userLoggedIn, onConfirmation: onConfirmationHandler }}>
            {!userLoggedIn ? <UserLoginForm updateLoginState={updateLoginState}></UserLoginForm> : ''}
            {userLoggedIn ? <Dashboard updateLoginState={updateLoginState}></Dashboard> : ''}
          </AuthContext.Provider>
          {/* <ExpenseForm notifyToParent={onNewExpenseAdded}/>
    <ExpenseList expenseList={expenseList} onDeleteExpense={onDeleteExpense}/> */}
        </HomepageWrapper>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
