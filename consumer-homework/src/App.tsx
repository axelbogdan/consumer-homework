import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, BookDetails } from './screens/';
import './App.css';

function App() {
  return (
      <React.StrictMode>
              <Router basename={`${process.env.PUBLIC_URL}`}>
                <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/:id" element={<BookDetails/>} />
                </Routes>
              </Router>
      </React.StrictMode>
  );
}

export default App;
