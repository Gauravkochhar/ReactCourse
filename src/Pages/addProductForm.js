import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { productStockActions } from "../store/Slice/productStockSlice";

import Styles from '../styles/addProductForm.module.css';

export const AddProductForm = () => {
    const [formValue, setFormValue] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitApiCall = async () => {
        try {
            const response = await fetch('https://ecommerce-a57e0-default-rtdb.firebaseio.com/productList.json', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({...formValue})
        });
        if(!response.ok) {
            throw new Error('Something Went Wrong');
        }
        const responseJson = await response.json();
        dispatch(productStockActions.addSingleProduct({ ...formValue}));
        toast.success(`${formValue.productName} successfully added in the list!`);
        navigate('/productList');
        console.log('responseJson:', responseJson)
        }
        catch(err) {
            toast.error(err.message || 'Something Went Wrong');
        }
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(formValue);
        submitApiCall();
    }

    return <div className={Styles['form-wrapper']}><h2>Add Product Form</h2>
        <form onSubmit={onSubmitHandler}>
            <div className={Styles['form-control']}>
            <label htmlFor="productId">Product ID *</label><br/>
            <input id="productId" type="text" onInput={(e) => setFormValue({...formValue, productId: e.target.value})}/>
            </div>

            <div className={Styles['form-control']}>
            <label htmlFor="productName">Product Name *</label><br/>
            <input id="productName" type="text" onInput={(e) => setFormValue({...formValue, productName: e.target.value})}/>
            </div>

            <div className={Styles['form-control']}>
            <label htmlFor="productPrice">Product Price *</label><br/>
            <input id="productPrice" type="number" onInput={(e) => setFormValue({...formValue, productPrice: e.target.value})}/>
            </div>

            <button type="submit">Add Product</button>
        </form>
    </div>
};