import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App';
import Navigation from './components/Navigation';
import Profile from './components/Profile';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <div className='table_container'>
    
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/profile/:id" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  </div>
);
