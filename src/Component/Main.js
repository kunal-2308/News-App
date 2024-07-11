import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sports from './Sports';
import Technology from './Technology';
import Business from './Business';
import News from './News';
import PropTypes from 'prop-types'
function Main({ country,countryName }) {
  const [url, setUrl] = useState(`https://newsapi.org/v2/top-headlines?`);
  const[Ccountry,CsetCountry] = useState(`country=${country}`)
  const [api,setApi] = useState('&apiKey=dccbb78423084e6898dd46aa7b4c07b8');
  const[category,setCategory] = useState(`category=sports`);
  
  return (
    <Routes>
      <Route exact path='/' element={<News heading="Top News Across " url={url} api={api} pageSize={'6'} countryName = {countryName} country={Ccountry}/>} />
      <Route exact path='/Sports' element={<Sports heading="Top Sports News Across " url={url} api={api}countryName = {countryName} category={category} setCategory={setCategory} country={Ccountry}/>} />
      <Route exact path='/Technology' element={<Technology heading="Top Technology News Across " url={url} api={api} countryName = {countryName} category={category} setCategory={setCategory} country={Ccountry}/>} />
      <Route exact path='/Business' element={<Business heading="Top Business News Across " url={url} api={api} countryName = {countryName} category={category} setCategory={setCategory} country={Ccountry}/>} />
    </Routes>
  );
}

export default Main;
Main.propType = {
  country : PropTypes.string,
}