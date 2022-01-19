import { createContext, ReactChild, useReducer } from 'react';
import { ThemeAction, ThemeState, ThemeValue } from 'utils/types';

export const ThemeContext = createContext({} as ThemeValue);

const themeReducer = (state: ThemeState, action: ThemeAction) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, color: action.payload };
    case 'CHANGE_MODE':
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }: { children: ReactChild }) => {
  const [state, dispatch] = useReducer(themeReducer, {
    color: '#58249c',
    mode: 'dark',
  });

  const changeColor = (color: string) => {
    dispatch({ type: 'CHANGE_COLOR', payload: color });
  };

  const changeMode = (mode: 'light' | 'dark') => {
    dispatch({ type: 'CHANGE_MODE', payload: mode });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
