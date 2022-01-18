import { FC } from 'react';
import { RecipeList } from 'components';
import { useFetch } from 'hooks';
import './Home.css';

const Home: FC = () => {
  const { data, isPending, error } = useFetch('/recipes');

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Home;
