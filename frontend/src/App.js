import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home/home.js';
import NotFound from './components/404/notFound'

function App() {
  return (
    <Router>
        <Home />
        <Routes>
          <Route path="*" component={NotFound} />
        </Routes>
    </Router>
    
  );
}

export default App;
