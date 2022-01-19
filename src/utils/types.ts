export type Data = {
  id?: string;
  title: string;
  ingredients: string[];
  method: string;
  cookingTime: string;
};

export type FetchOptions = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: { 'Content-Type': 'application/json' };
  body?: string;
};

export type Mode = 'light' | 'dark';

export type ThemeAction =
  | { type: 'CHANGE_COLOR'; payload: string }
  | { type: 'CHANGE_MODE'; payload: 'light' | 'dark' };

export type ThemeState = {
  color: string;
  mode: Mode;
};

export type ThemeValue = ThemeState & {
  changeColor: (color: string) => void;
  changeMode: (mode: 'light' | 'dark') => void;
};
