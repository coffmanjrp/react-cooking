import { FC } from 'react';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import useFetch from 'hooks/useFetch';
import './Recipe.css';

const Recipe: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: recipe,
    isPending,
    error,
    deleteData,
  } = useFetch(`/recipes/${id}`);

  const handleDelete = () => {
    const deleteConfirm = window.confirm(
      'Are you sure you want to delete this recipe?'
    );

    if (deleteConfirm) {
      deleteData();

      setTimeout(() => navigate('/'), 1000);
    } else {
      return;
    }
  };

  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook</p>
          <ul>
            {recipe.ingredients?.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
          <button type="button" className="btn" onClick={handleDelete}>
            Delete Recipe
          </button>
        </>
      )}
    </div>
  );
};

export default Recipe;
