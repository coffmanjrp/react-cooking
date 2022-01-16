import { FC, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Searchbar.css';

const Searchbar: FC = () => {
  const [term, setTerm] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate(`/search?q=${term}`);
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Searchbar;
