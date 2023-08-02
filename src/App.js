

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Flair from './components/Flair';
import Coming from './pages/Coming';

function App() {
  return (
    <Router>
      <Header />
      <Flair />
      <Routes>
        <Route index element={ <Home/>} />
        <Route path='*' element={ <Coming/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

