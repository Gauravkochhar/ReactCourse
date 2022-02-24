import { useState } from 'react';
import './ExpenseForm.css';

export const ExpenseForm = (props) => {
    const [ formValue, setFromValue] = useState({
        id: '',
        name:'',
        amount: 0
    });

    function onExpenseAdded() {

    }

    function onSubmitExpense(event) {
        event.preventDefault();
        props.notifyToParent({...formValue, id: Math.random().toString()});
    }

    function onInput(controlName, e) {
        setFromValue({
            ...formValue,
            [controlName]: e.target.value
        })
    }
    
    return (
        <form onSubmit={onSubmitExpense}>
            <div>
            <input type="text" placeholder='Expense Name' name="name" value={formValue.name}
            onChange={(e) => {onInput('name', e)}}></input>
            </div>
            <div>
            <input type="number" placeholder='Expense Amount' name="amount" value={formValue.amount}
            onChange={(e) => {onInput('amount', e)}}></input>
            </div>
            <button type="submit">Add Expense</button>
        </form>
    )
}

export default ExpenseForm;