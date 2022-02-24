import './Expense.css';
import { useState } from 'react';

function Expense(props) {

    return <div className="expense-wrapper">
        <p>Expense Id: {props.id}</p>
        <p>Expense Name: {props.name}</p>
        <p>Expense Amount: {props.amount}</p>
    </div>;
}

export default Expense;