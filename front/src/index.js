import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App';
import Navigation from './components/Navigation';
import ProfileEdit from './components/ProfileEdit';
import Profile from './components/Profile';
import TaskPersonID from './components/TaskPersonID';
import TaskList from './components/TaskList';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <div className='table_container'>
    
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/profile/:id" element={<Profile/>}/>
        <Route path="/tasks/" element={<TaskList/>}/>
        <Route path="/task/:personId" element={<TaskPersonID/>}/>
        <Route path="/profile/:id/edit" element={<ProfileEdit/>}/>
      </Routes>
    </BrowserRouter>
  </div>
);
