import { createContext, ReactChild } from 'react';

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }: { children: ReactChild }) => {
  return (
    <ThemeContext.Provider value={{ color: 'blue' }}>
      {children}
    </ThemeContext.Provider>
  );
};
