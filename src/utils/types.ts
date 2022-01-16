export type Data = {
  id?: string;
  title: string;
  ingredients: string[];
  method: string;
  cookingTime: string;
};

export type FetchOptions = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers: { 'Content-Type': 'application/json' };
  body: string;
};
