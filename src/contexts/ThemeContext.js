import React, { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')));

    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
      localStorage.setItem('theme', JSON.stringify(theme));
    }, [theme]);

    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };
