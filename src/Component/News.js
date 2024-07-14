import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Spinner from "./Spinner";
import '/Users/kunal/Desktop/MERN/React/news-app/src/Component/All.css';

function News(props) {
  const [state, setState] = useState({
    articles: [],
    loading: false,
    page: 1,
    url: `${props.url}${props.country}${props.api}`,
    totalResults: 0,
    heading: `${props.heading}${props.countryName}`,
  });

  useEffect(() => {
    setState(prevState => ({
      ...prevState,
      url: `${props.url}${props.country}${props.api}`,
    }))
  }, [props.country]);

  useEffect(() => {
    props.setProgress(15);
    const fetchData = async () => {
      setState(prevState => ({ ...prevState, loading: true }));
      const url = `${state.url}&page=${state.page}&pageSize=${props.pageSize}`;
    props.setProgress(25);
      
      let promise = await fetch(url);
     
      props.setProgress(50);
      let data = await promise.json();
      let parsedData = data.articles;
      
      props.setProgress(75);
      setState(prevState => ({
        ...prevState,
        articles: parsedData,
        loading: false,
        totalResults: parsedData.totalResults,
      }));
      props.setProgress(100);
    };
    fetchData();
  }, [state.url, state.page, props.pageSize]);


  const handlePrevClick = async () => {
    console.log("Prev page loading");
    const newPage = state.page - 1;
    if (newPage < 1) return;

    const newUrl = `${props.url}${props.country}${props.api}`;
    setState(prevState => ({
      ...prevState,
      page: newPage,
      url: newUrl,
    }));
  };

  const handleNextClick = async () => {
    console.log("Next page loading");
    const newPage = state.page + 1;
    if (newPage > Math.ceil(state.totalResults / props.pageSize)) return;

    const newUrl = `${props.url}${props.country}${props.api}`;
    setState(prevState => ({
      ...prevState,
      page: newPage,
      url: newUrl,
    }));
  };

  return (
    <>
      <div className="container">
        <div className="heading-div" style={{margin:'80px'}}>
          <h3 id="heading-top" className="my-4" >
            {state.heading}
          </h3>
        </div>
        {state.loading && <Spinner />}
        <div className="row">
          {!state.loading && state.articles.map((element) => {
            return (
              <div className="col-md-3 mx-4 my-4" key={element.url}>
                <div className="card position-relative" style={{ width: "18rem", marginRight: "10px" }}>
                  <img
                    src={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT50mHKSr83o2HKeSJbgZmYaYoxcmxd3epXUQ&s"
                    }
                    className="card-img-top"
                    alt="..."
                    style={{ marginBottom: '10px' }}
                  />
                  <span className="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-danger p-2 text-white">
                    {element.author ? `${element.author}` : 'Unknown Source'}
                  </span>
                  <div className="card-body">
                    <h5 className="card-title">{element.title.slice(0, 45)}</h5>
                    <p className="card-text">
                      {element.description
                        ? element.description.slice(0, 88)
                        : "Read More..."}
                      ...
                    </p>
                    <p className="card-text">
                      {`Time : ${element.publishedAt.slice(0, 10)}`}
                    </p>
                    <a href={element.url} className="btn btn-dark">
                      Read More &rarr;
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-around">
          <button
            type="button"
            disabled={state.page <= 1}
            className="btn btn-dark"
            onClick={handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={state.page + 1 > Math.ceil(state.totalResults / props.pageSize)}
            type="button"
            className="btn btn-dark"
            onClick={handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </>
  );
}

export default News;

News.propTypes = {
  url: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};
