import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sports from './Sports';
import Technology from './Technology';
import Business from './Business';
import News from './News';
import PropTypes from 'prop-types'
function Main({ country,countryName }) {
  const [url, setUrl] = useState(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=a19869921da44ed7b42cf9786a496543`);

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/Sports':
        setUrl(`https://newsapi.org/v2/top-headlines?category=sports&country=${country}&apiKey=a19869921da44ed7b42cf9786a496543`);
        break;
      case '/Technology':
        setUrl(`https://newsapi.org/v2/top-headlines?category=technology&country=${country}&apiKey=a19869921da44ed7b42cf9786a496543`);
        break;
      case '/Business':
        setUrl(`https://newsapi.org/v2/top-headlines?category=business&country=${country}&apiKey=a19869921da44ed7b42cf9786a496543`);
        break;
      
    }
  }, [location.pathname, country]);

  return (
    <Routes>
      <Route exact path='/' element={<News heading="Top News Across " url={url} pageSize={6} countryName = {countryName} />} />
      <Route exact path='/Sports' element={<Sports heading="Top Sports News Across " url={url} countryName = {countryName}/>} />
      <Route exact path='/Technology' element={<Technology heading="Top Technology News Across " url={url} countryName = {countryName}/>} />
      <Route exact path='/Business' element={<Business heading="Top Business News Across " url={url} countryName = {countryName}/>} />
    </Routes>
  );
}

export default Main;
Main.propType = {
  country : PropTypes.string,
}