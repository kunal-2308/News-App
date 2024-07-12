import './App.css';
import Navbar from './Component/Navbar';
import Main from './Component/Main';
import { BrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';
function App() {
  const [country, setCountry] = useState('us');
  const [countryName,setCountryName] = useState('United States');

  return (
    <BrowserRouter>
      <Navbar setCountry={setCountry} />
      <Main country={country} countryName={countryName} />
    </BrowserRouter>
  );
}
export default App;

//props.url + category + "&" + props.country + props.api