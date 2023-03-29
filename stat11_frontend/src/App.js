import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Auth from './pages/auth';
import MediaCard from './components/cards/card';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route 
        path={`/`}
        element={<Home />}
        />
        <Route 
        path={`/home`}
        element={<Home />}
        />
        <Route 
        path={`/auth`}
        element={<Auth />}
        />
        <Route 
        path={`/card`}
        element={<MediaCard team1 = "Blue" team2="Purple" 
        team1runs = {147} team2runs = {152}
        team1college = "IIT Roorkee" team2college="IIT Kharagpur"
        toss = "1" matchover = "1" winner ="Blue"
        team1wickets = "02" team2wickets = "03"
         />}
        />
      </Routes>
    </div>
  )
}

export default App;
