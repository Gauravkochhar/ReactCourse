import React, { useContext } from 'react';
import AuthContext from '../../store/AuthContext/AuthContext';
import './Dashboard.css';

export const Dashboard = (props) => {

    const ctx = useContext(AuthContext);

    function logoutHandler() {
        props.updateLoginState(false);
        localStorage.setItem('isUserLoggedIn', 'false');
        ctx.onConfirmation('You have successfully Logged out')
    }

    return <React.Fragment>
        <p>{ctx.isLoggedIn ? 'User successfully loggedIn.' : ''}</p>
        <div className="main-section">
            <p>Welcome User</p>
            <button onClick={logoutHandler}>Logout</button>
        </div>
    </React.Fragment>
}

export default Dashboard;