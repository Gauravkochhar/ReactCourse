import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import './ExpenseForm.css';
import Button from '../ui-components/Button/Button';

export const Modal = (props) => {
    return <><p>{props.title}</p></>;
}
export const ExpenseForm = (props) => {
    const nameRef = useRef();
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
        console.log(nameRef.current.value);
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
        <React.Fragment>
        {/* <>{ReactDOM.createPortal(<Modal title="This is Modal Title" />, document.getElementById('backdrop-root'))}</> */}
        <form onSubmit={onSubmitExpense}>
            <div className='form-control'>
            {/* style={{borderColor: invalidForm ? 'red': 'transparent'}} */}
            <input ref={nameRef} className={`${invalidFormState.name ? 'invalid-input': ''}`}  type="text" placeholder='Expense Name' name="name" value={formValue.name}
            onChange={(e) => {onInput('name', e)}}></input>
            </div>
            <div className='form-control'>
            <input className={`${invalidFormState.amount ? 'invalid-input': ''}`} type="number" placeholder='Expense Amount' name="amount" value={formValue.amount}
            onChange={(e) => {onInput('amount', e)}}></input>
            </div>
            <button type="submit">Add Expense</button>
        </form>
        <Button invalidFormState={invalidFormState} type="button" buttonColor="yellow" onClick={onStyleBtnClick}>Styled button</Button>
        </React.Fragment>
    )
}

export default ExpenseForm;