
import { Router, Routes } from 'react-router-dom';

import './App.css';


function App() {
  return (
    <div className="App">
      <header className="">
        <h1>Header do site</h1>
        <nav>
          ...
        </nav>
      </header>
      <hr />

      <Routes>
        {/* <Router path="/" element={<Home />} />
        <Router path="/private" element={<Private />} /> */}
      </Routes>
    </div>
  );
}

export default App;
