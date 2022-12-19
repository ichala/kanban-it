import { useState, createContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [Theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || 'night');
  localStorage.setItem('theme', JSON.stringify(Theme));
  return (
    <ThemeContext.Provider value={{ Theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
