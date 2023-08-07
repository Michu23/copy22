

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Flair from './components/Flair';
import Coming from './pages/Coming';
import Blogs from './pages/Blog';


import { StateProvider } from './context/StateContext';

function App() {
  return (
    <Router>
      <Header />
      {/* <Flair /> */}
      <StateProvider>
      <Routes>
        <Route index element={ <Home/>} />
        <Route path='*' element={ <Coming/>} />
        <Route path='/blogs' element={ <Blogs/>} />
      </Routes>
      </StateProvider>
      <Footer />
    </Router>
  );
}

export default App;

