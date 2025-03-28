import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import TypingTest from './components/TypingTest';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/typing-test" element={<TypingTest />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
