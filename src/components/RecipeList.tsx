import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'hooks';
import { Data } from 'utils/types';
import './RecipeList.css';

type Props = {
  recipes: Data[];
};

const RecipeList: FC<Props> = ({ recipes }) => {
  const { mode } = useTheme();

  if (recipes.length === 0) {
    return <div className="error">No recipes to load...</div>;
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
