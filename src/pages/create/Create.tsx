import { FC, FormEvent, MouseEvent, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from 'hooks/useFetch';
import './Create.css';

const Create: FC = () => {
  const [title, setTitle] = useState<string>('');
  const [method, setMethod] = useState<string>('');
  const [cookingTime, setCookingTime] = useState<string>('');
  const [newIngredient, setNewIngredient] = useState<string>('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const ingredientInput = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const { data, postData } = useFetch('/recipes', 'POST');

  useEffect(() => {
    if (data) {
      navigate('/');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    postData({
      title,
      method,
      cookingTime: `${cookingTime} minutes`,
      ingredients,
    });
  };

  const handleAdd = (e: MouseEvent) => {
    e.preventDefault();

    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevState) => [...prevState, ing]);
    }

    setNewIngredient('');
    ingredientInput.current?.focus();
  };

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Reciipe ingredients:</span>
          <div className="ingredients">
            <input
              type="text"
              ref={ingredientInput}
              value={newIngredient}
              onChange={(e) => setNewIngredient(e.target.value)}
            />
            <button type="button" className="btn" onClick={handleAdd}>
              add
            </button>
          </div>
        </label>
        <p>
          Current ingredients:{' '}
          {ingredients.map((ingredient) => (
            <em key={ingredient}>{ingredient}, </em>
          ))}
        </p>
        <label>
          <span>Recipe method:</span>
          <textarea
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Cooking time (minutes):</span>
          <input
            type="number"
            value={cookingTime}
            onChange={(e) => setCookingTime(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
