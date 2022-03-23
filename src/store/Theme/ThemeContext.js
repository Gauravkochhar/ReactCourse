import React from 'react';

const ThemeContext = React.createContext({
    theme: 'dark',
    onThemeChange: (themeName) => {}
});

export default ThemeContext;