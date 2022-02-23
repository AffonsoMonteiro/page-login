
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Private } from './pages/Private';
import { RequireAuth } from './contexts/Auth/RequireAuth'


import './App.css';


function App() {
  return (
    <div className="App">
      <header className="">
        <h1>Header do site</h1>
        <nav>
          <Link to="/">
            Home
          </Link>
          <Link to="/private">
            Página Privada
          </Link>
        </nav>
      </header>
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<RequireAuth><Private/></RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;
