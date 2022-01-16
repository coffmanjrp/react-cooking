import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { RecipeList } from 'components';
import useFetch from 'hooks/useFetch';
import './Search.css';

const Search: FC = () => {
  const queryString = useLocation();
  const queryParams = new URLSearchParams(queryString.search);
  const query = queryParams.get('q');
  const { data, isPending, error } = useFetch(`/recipes?q=${query}`);

  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Search;
