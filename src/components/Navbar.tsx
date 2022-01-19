import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Searchbar } from '.';
import { useTheme } from 'hooks';
import './Navbar.css';

const Navbar: FC = () => {
  const { color } = useTheme();

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
