import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Posologia from './Posologia';
import Anamnese from './Anamnese';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posologia" element={<Posologia />} />
        <Route path="/anamnese" element={<Anamnese />} /> {}
      </Routes>
    </Router>
  );
}

export default App;
