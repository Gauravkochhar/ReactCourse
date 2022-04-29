import { useState } from 'react';
import { ValidatorList } from '../../utils/utility-functions';
import useInput from '../Custom-Hook/useInput';
import './ReusableInput.css';

const ReusableInput = () => {

    const { enteredValue: enteredName, hasError: nameHasError, valueChangeHandler: onNameChangeHandler, inputBlurHandler: onNameBlur } = useInput(ValidatorList.requiredValiidator);
    const { enteredValue: enteredEmail, hasError: emailHasError, isTouched: isEmailTouched, valueChangeHandler: onEmailChangeHandler, inputBlurHandler: onEmailBlur } = useInput(ValidatorList.emailValidator);


    
    function getClassName(isInvalid) {
        return isInvalid ? `form-control invalid-input`: 'form-control';
    }

    function isEmailHasError() {
        return (!enteredEmail && isEmailTouched) || (!(!enteredEmail && isEmailTouched) && emailHasError);
    }

    return <>
        <input className={getClassName(nameHasError)} placeholder="Enter Name" onChange={onNameChangeHandler} onBlur={onNameBlur}/>
        {  nameHasError ? <p>Name field is required</p>: ''}
    <br/>
        <input className={getClassName(isEmailHasError())} placeholder="Enter Email" onChange={onEmailChangeHandler} onBlur={onEmailBlur}/>
        {  !enteredEmail && isEmailTouched ? <p>Email field is required</p>: ''}
        {  !(!enteredEmail && isEmailTouched) && emailHasError ? <p>Email is not valid.</p>: ''}
    </>
}

export default ReusableInput;