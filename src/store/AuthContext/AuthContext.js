import React from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onConfirmation: () => {}
});

export default AuthContext;