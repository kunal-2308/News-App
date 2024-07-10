import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import CarouselTopHeading from './CarouselTopHeading';
import Sports from './Sports';
import Technology from './Technology';
import Business from './Business';

function Main() {
  let [url, setUrl] = useState("https://newsapi.org/v2/top-headlines?country=in&apiKey=a19869921da44ed7b42cf9786a496543");

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/Sports':
        setUrl("https://newsapi.org/v2/top-headlines?category=sports&country=in&apiKey=a19869921da44ed7b42cf9786a496543");
        break;
      case '/Technology':
        setUrl("https://newsapi.org/v2/top-headlines?category=technology&country=in&apiKey=a19869921da44ed7b42cf9786a496543");
        break;
      case '/Business':
        setUrl("https://newsapi.org/v2/top-headlines?category=business&country=in&apiKey=a19869921da44ed7b42cf9786a496543");
        break;
      default:
        setUrl("https://newsapi.org/v2/top-headlines?country=in&apiKey=a19869921da44ed7b42cf9786a496543");
        break;
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route exact path='/' element={<CarouselTopHeading heading="Top News Across India" url={url} />} />
      <Route exact path='/Sports' element={<Sports heading="Top Sports News Across India" url={url} />} />
      <Route exact path='/Technology' element={<Technology heading="Top Technology News Across India" url={url} />} />
      <Route exact path='/Business' element={<Business heading="Top Business News Across India" url={url} />} />
    </Routes>
  );
}

export default Main;
