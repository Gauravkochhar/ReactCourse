import logo from './logo.svg';
import Expense from './components/Expense/Expense';
import './App.css';
import HomepageWrapper from './components/HomepageWrapper/HomepageWrapper';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
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
import { Welcome } from './Pages/Welcome';
import { Navigate, Route, Routes } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import { Aboutus } from './Pages/Aboutus';
import { MainHeader } from './utils/MainHeader';
import { Products } from './Pages/Products';
import { ProductDetail } from './Pages/ProductDetail';
import ClassbasedCounterRedux from './Pages/ClassbasedCounterRedux';
import { AddProductForm } from './Pages/addProductForm';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EcommerceProductList } from './Pages/ecommerceProductList';
import { useDispatch, useSelector } from 'react-redux';
import { productStockActions } from './store/Slice/productStockSlice';
import { CartList } from './Pages/CartList';

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
  const dispatch = useDispatch();
  const storeProductList = useSelector((store) => store.productStock.products);

  const fetchProducts = async () => {
    try {
        const response = await fetch('https://ecommerce-a57e0-default-rtdb.firebaseio.com/productList.json', {
        method: 'GET'
    });
    if(!response.ok) {
        throw new Error('Something Went Wrong');
    }
    const responseJson = await response.json();
    let productList = [];
        for (const key in responseJson) {
            productList.push(responseJson[key]);
        }
    dispatch(productStockActions.saveFetchedProductList(productList));
    console.log('responseJson:', responseJson)
    }
    catch(err) {
        toast.error(err.message || 'Something Went Wrong');
    }
}

  useEffect(() => {
    fetchProducts();
  }, []);

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
    <div>
      <ToastContainer closeButton={false} position="top-right" />
      <h1>Router Page</h1>
      <MainHeader/>
      <Routes>
      <Route path="/" element={<Navigate to="/home" />} exact>
        {/* <Redirect to="/home" /> */}
        
      </Route>
      <Route path="/home" element={<Welcome />}></Route>
      <Route path="/counterExample" element={<ClassbasedCounterRedux/>}></Route>
      <Route path="/products" element={<Products/>} exact></Route>
      <Route path="/products/:productId" element={<ProductDetail/>}></Route>
      <Route path="/aboutus" element={<Aboutus/>}></Route>
      <Route path="/addProduct" element={<AddProductForm/>}></Route>
      <Route path="/productList" element={<EcommerceProductList/>}></Route>
      <Route path="/cartList" element={<CartList/>}></Route>
      <Route path="*" element={<h1>Page Not Found</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
