import React, { useState } from 'react';

export const UserLoginForm = (props) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    if(localStorage.getItem('isUserLoggedIn') === 'true') {
        props.updateLoginState(true);
    } else {
        props.updateLoginState(false);
    }
    
    function emailChangeHandler(e) {
        setEmail(e.target.value);
    }

    function passwordChangeHandler(e) {
        setPassword(e.target.value);
    }

    function onSubmitLoginForm(event) {
        event.preventDefault();
        const isEmailValid = email;
        const isPassValid = password;
        if(isEmailValid && isPassValid) {
            localStorage.setItem('isUserLoggedIn', 'true');
            props.updateLoginState(true);
        } else {
            localStorage.setItem('isUserLoggedIn', 'false');
            props.updateLoginState(false);
        }
    }

    return <React.Fragment>
        <h3>User Login Form</h3>
        <form onSubmit={onSubmitLoginForm}>
        <div className='form-control'>
            <input type="text" placeholder='Registered Email' name="email"value={email}
            onChange={(e) => emailChangeHandler(e)}></input>
            </div>
            <div className='form-control'>
            <input type="password" placeholder='Passsword' name="password" value={password}
            onChange={(e) => passwordChangeHandler(e)}></input>
            </div>
            <button type="submit">Login</button>
        </form>
    </React.Fragment>
}

export default UserLoginForm;