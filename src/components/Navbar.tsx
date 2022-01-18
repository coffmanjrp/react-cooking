import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Searchbar } from '.';
import { ThemeContext } from 'context/ThemeContext';
import './Navbar.css';

const Navbar: FC = () => {
  const { color } = useContext(ThemeContext);

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>React Cooking</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
};

export default Navbar;
