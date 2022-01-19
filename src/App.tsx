import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Create, Home, Recipe, Search, Update } from 'pages';
import { Navbar, ThemeSelector } from 'components';
import { useTheme } from 'hooks';
import 'App.css';

function App() {
  const { mode } = useTheme();

  return (
    <div className={`App ${mode}`}>
      <Router>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipes/:id" element={<Recipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
