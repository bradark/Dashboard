import './App.css';
import React from 'react';
import { BrowserRouter as Router,
  Routes,
  Route, } from "react-router-dom"
import Profile from "./pages/profile";
import Payments from "./pages/payments";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home.jsx";
import DiscordBot from './pages/discordbot';
import Products from './pages/products';
import Settings from './pages/settings'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/payments" element={<Payments/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/discordbot" element={<DiscordBot/>}></Route>
          <Route path="/settings" element={<Settings/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;