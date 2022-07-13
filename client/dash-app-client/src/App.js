import './App.css';
import React from 'react';
import { BrowserRouter as Router,
  Routes,
  Route, } from "react-router-dom"
import Dashboard from "./pages/dashboard";
import Payments from "./pages/payments"
import Home from "./pages/home.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/profile" element={<Dashboard />}></Route>
          <Route path="/payments" element={<Payments />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;