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
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook</p>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  );
};

export default Recipe;
