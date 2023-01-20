import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Page } from './components/Page';
import { Profile } from './components/Profile';
import { Menu } from './components/Menu';
import './css/App.css';

function App() {
  return (
    <>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Page />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<p>no Found</p>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
