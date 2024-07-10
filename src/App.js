import './App.css';
import Navbar from './Component/Navbar';
import Main from './Component/Main';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Main />
    </BrowserRouter>
  );
}

export default App;
