import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sports from './Sports';
import Technology from './Technology';
import Business from './Business';
import News from './News';
import PropTypes from 'prop-types'
import International from './International';
import LoadingBar from 'react-top-loading-bar';
function Main({ country,countryName }) {
  const [url, setUrl] = useState(`https://newsapi.org/v2/top-headlines?`);
  const[Ccountry,CsetCountry] = useState(`country=${country}`)
  const [api,setApi] = useState('&apiKey=a19869921da44ed7b42cf9786a496543');

  
  useEffect(()=>{
    CsetCountry(`country=${country}`);
  },[country]);
  
  const [progress,setProgress] = useState(10);
  return (
    <>
    <LoadingBar
        color='#f11946'
        progress={progress}
        height = {4}
        shadow = {true}
      />
    <Routes>
      <Route exact path='/' element={<News heading="Top News Across " url={url} api={api} pageSize={'6'} countryName = {countryName} country={Ccountry} setProgress={setProgress}/>} />
      <Route exact path='/Sports' element={<Sports heading="Top Sports News Across " url={url} api={api} pageSize={'6'} countryName = {countryName} category={'sports'}  country={Ccountry} setProgress={setProgress}/>} />
      <Route exact path='/Technology' element={<Technology heading="Top Technology News Across " url={url} api={api} pageSize={'6'} countryName = {countryName} category={'Technology'}  country={Ccountry} setProgress={setProgress}/>} />
      <Route exact path='/Business' element={<Business heading="Top Business News Across " url={url} api={api} pageSize={'15'} countryName = {countryName} category={'business'} country={Ccountry} setProgress={setProgress}/>} />
      <Route exact path = '/International' element={<International heading="Top International News Across The World" url={url} api={api} pageSize={'6'} countryName = {countryName} category={'general'} country={'us'} setProgress={setProgress}/>}/>
    </Routes>
    </>
  );
}

export default Main;
Main.propType = {
  country : PropTypes.string,
}