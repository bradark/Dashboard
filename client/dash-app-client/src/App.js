import './App.css';
import React from 'react';
import { BrowserRouter as Router,
  Routes,
  Route, } from "react-router-dom"
import Dashboard from "./pages/dashboard.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;