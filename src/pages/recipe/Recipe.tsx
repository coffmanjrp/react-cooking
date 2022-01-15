import { FC } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from 'hooks/useFetch';
import './Recipe.css';

const Recipe: FC = () => {
  const { id } = useParams();
  const { data: recipe, isPending, error } = useFetch(`/recipes/${id}`);

  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && <h3>{recipe.title}</h3>}
    </div>
  );
};

export default Recipe;
