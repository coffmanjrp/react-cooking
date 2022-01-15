import { FC } from 'react';
import useFetch from 'hooks/useFetch';
import './Home.css';

const Home: FC = () => {
  const { data, isPending, error } = useFetch('/recipes');

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && data.map((recipe) => <h2 key={recipe.id}>{recipe.title}</h2>)}
    </div>
  );
};

export default Home;
