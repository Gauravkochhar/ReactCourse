import React, { useState, useEffect, useReducer, useRef } from 'react';
import AuthContext from '../../../store/AuthContext/AuthContext';
import Button from '../../Button/Button';
import CustomInput from '../../CustomInput/CustomInput';

export const UserLoginForm = (props) => {
    const loginFormReducer = (oldState, action) => {
        if(action.type == 'EMAIL_CHANGE') {
            return {
                ...oldState,
                email: {
                    value: action.payload.value,
                    isValid: action.payload.isValid
                }
            }
        }
        if(action.type == 'PASS_CHANGE') {
            return {
                ...oldState,
                password: {
                    value: action.payload.value,
                    isValid: action.payload.isValid
                }
            }
        }
        // return { email: {value: '', isValid: ''}, password: {value: '', isValid: ''}};
    }

    const initialState = { email: {value: '', isValid: ''}, password: {value: '', isValid: ''}};
    const [ state, dispatchFn] = useReducer(loginFormReducer, initialState);
    const emailRef = useRef();
    const passwordRef = useRef();


    useEffect(() => {
        (localStorage.getItem('isUserLoggedIn') == 'true') ? props.updateLoginState(true): props.updateLoginState(false);
    }, []);

    // const [email, setEmail] = useState('');
    // const [ isEmailValid, setIsEmailValid] = useState(false);
    // const [password, setPassword] = useState('');
    // const [isPassValid, setIsPassValid] = useState(false);
    // const [formValid, setFormValid] = useState(false);
    // useEffect(() => {
    //     console.log('reevaluate useeffect code')
    //     const emailValidate = email.includes('@') && (email.length > 6);
    //     const passValidate = (password.length > 6);
    //     setIsEmailValid(() => {
    //         return emailValidate;
    //     });
    //     setIsPassValid(() => {
    //         return passValidate;
    //     });
    //     setFormValid(() => {
    //         return emailValidate && passValidate;
    //     });
    // }, [email, password])
    
    function emailChangeHandler(e) {
        dispatchFn({ type: 'EMAIL_CHANGE', payload: {
            value: e.target.value,
            isValid: e.target.value.includes('@') && (e.target.value.length > 6)
        }});
    }

    function passwordChangeHandler(e) {
        dispatchFn({ type: 'PASS_CHANGE', payload: {
            value: e.target.value,
            isValid: e.target.value.length > 6
        }});
    }

    function onSubmitLoginForm(event) {
        event.preventDefault();
        const isEmailValid = state.email.isValid;
        const isPassValid = state.password.isValid;
        // console.log(state.email.value);
        // console.log(state.password.value);
        // if(isEmailValid && isPassValid) {
        //     localStorage.setItem('isUserLoggedIn', 'true');
        //     props.updateLoginState(true);
        // } else {
        //     localStorage.setItem('isUserLoggedIn', 'false');
        //     props.updateLoginState(false);
        // }

        if(isEmailValid && isPassValid) {
            localStorage.setItem('isUserLoggedIn', 'true');
            props.updateLoginState(true);
        } else if(!isEmailValid) {
            emailRef.current.focusFromParent();
        } else if(!isPassValid) {
            passwordRef.current.focusFromParent();
        } 
    }

    return <AuthContext.Consumer>
        {
            (ctx) => {
                return (
                    <>
                    <h3>User Login Form</h3>
                    {/* onSubmit={onSubmitLoginForm} */}
                    <form>
                    <div className='form-control'>
                        {/* <input type="text" placeholder='Registered Email' name="email" value={state.email.value}
                        onChange={(e) => emailChangeHandler(e)}></input> */}
                        <CustomInput ref={emailRef} type="text" placeholderText="Custom Registered Email" controlName="email" value={state.email.value} onValChange={(e) => emailChangeHandler(e)}></CustomInput>
                        </div>
                        <div className='form-control'>
                        {/* <input type="password" placeholder='Passsword' name="password" value={state.password.value}
                        onChange={(e) => passwordChangeHandler(e)}></input> */}
                        <CustomInput ref={passwordRef} type="password" placeholderText="Custom Passsword" controlName="password" value={state.password.value} onValChange={(e) => passwordChangeHandler(e)}></CustomInput>
                        </div>
                        {/* disabled={!(state.email.isValid && state.password.isValid)} */}
                        <Button type="button" onClick={onSubmitLoginForm}>Login</Button>
                    </form>
                    </>
                )
            }
        }
    </AuthContext.Consumer>
}

export default UserLoginForm;