import { useState } from 'react';
import './ExpenseForm.css';
import Button from '../ui-components/Button/Button';

export const ExpenseForm = (props) => {
    const [ invalidFormState, setInvalidFormState] = useState({
        name: false,
        amount: false
    });
    const [ formValue, setFromValue] = useState({
        id: '',
        name:'',
        amount: 0
    });

    function onSubmitExpense(event) {
        event.preventDefault();
        setInvalidFormState({
            name: formValue.name ? false: true,
            amount: formValue.amount > 0 ? false: true
        })
        props.notifyToParent({...formValue, id: Math.random().toString()});
    }

    function onInput(controlName, e) {
        setFromValue({
            ...formValue,
            [controlName]: e.target.value
        })
    }
    
    function onStyleBtnClick() {
        alert("Button clicked");
    }

    return (
        <div>
        <form onSubmit={onSubmitExpense}>
            <div className='form-control'>
            {/* style={{borderColor: invalidForm ? 'red': 'transparent'}} */}
            <input className={`${invalidFormState.name ? 'invalid-input': ''}`}  type="text" placeholder='Expense Name' name="name" value={formValue.name}
            onChange={(e) => {onInput('name', e)}}></input>
            </div>
            <div className='form-control'>
            <input className={`${invalidFormState.amount ? 'invalid-input': ''}`} type="number" placeholder='Expense Amount' name="amount" value={formValue.amount}
            onChange={(e) => {onInput('amount', e)}}></input>
            </div>
            <button type="submit">Add Expense</button>
        </form>
        <Button invalidFormState={invalidFormState} type="button" buttonColor="yellow" onClick={onStyleBtnClick}>Styled button</Button>
        </div>
    )
}

export default ExpenseForm;