import React, { useState, useEffect, useReducer } from 'react';
import AuthContext from '../../../store/AuthContext/AuthContext';

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
        const isEmailValid = state.email.value;
        const isPassValid = state.password.value;
        console.log(state.email.value);
        console.log(state.password.value);
        if(isEmailValid && isPassValid) {
            localStorage.setItem('isUserLoggedIn', 'true');
            props.updateLoginState(true);
        } else {
            localStorage.setItem('isUserLoggedIn', 'false');
            props.updateLoginState(false);
        }
    }

    return <AuthContext.Consumer>
        {
            (ctx) => {
                return (
                    <>
                    <h3>User Login Form</h3>
                    <form onSubmit={onSubmitLoginForm}>
                    <div className='form-control'>
                        <input type="text" placeholder='Registered Email' name="email" value={state.email.value}
                        onChange={(e) => emailChangeHandler(e)}></input>
                        </div>
                        <div className='form-control'>
                        <input type="password" placeholder='Passsword' name="password" value={state.password.value}
                        onChange={(e) => passwordChangeHandler(e)}></input>
                        </div>
                        <button type="submit" disabled={!(state.email.isValid && state.password.isValid)}>Login</button>
                    </form>
                    </>
                )
            }
        }
    </AuthContext.Consumer>
}

export default UserLoginForm;