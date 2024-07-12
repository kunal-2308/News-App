import './App.css';
import Navbar from './Component/Navbar';
import Main from './Component/Main';
import { BrowserRouter } from 'react-router-dom';
import React, { useState,useEffect } from 'react';

function App() {
  const [country, setCountry] = useState('in');
  const [countryName, setCountryName] = useState('India');
  console.log(country);

  useEffect(() => {
    console.log(`Country changed to: ${country}`);
  }, [country]);


  return (
    <BrowserRouter>
      <Navbar setCountry={setCountry} />
      <Main country={country} countryName={countryName} />
    </BrowserRouter>
  );
}

export default App;
