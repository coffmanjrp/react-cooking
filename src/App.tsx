import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Create, Home, Recipe, Search } from 'pages';
import { Navbar, ThemeSelector } from 'components';
import 'App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipes/:id" element={<Recipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
