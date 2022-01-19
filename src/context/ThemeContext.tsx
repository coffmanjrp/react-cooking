import { createContext, ReactChild, useReducer } from 'react';

type ThemeValue = { color: string; changeColor: (color: string) => void };
type ThemeAction = { type: 'CHANGE_COLOR'; payload: string };
type ThemeState = {
  color: string;
};

export const ThemeContext = createContext({} as ThemeValue);

const themeReducer = (state: ThemeState, action: ThemeAction) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, color: action.payload };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }: { children: ReactChild }) => {
  const [state, dispatch] = useReducer(themeReducer, {
    color: '#58249c',
  });

  const changeColor = (color: string) => {
    dispatch({ type: 'CHANGE_COLOR', payload: color });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};
