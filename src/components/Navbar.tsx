import { FC } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: FC = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>React Cooking</h1>
        </Link>
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
};

export default Navbar;
