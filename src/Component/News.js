import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Spinner from "./Spinner";

function News(props) {
  const [state, setState] = useState({
    articles: [],
    loading: false,
    page: 1,
    url: `${props.url}${props.country}${props.api}`,
    totalResults: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      setState(prevState => ({ ...prevState, loading: true }));
      const url = `${state.url}&page=${state.page}&pageSize=${props.pageSize}`;
      let promise = await fetch(url);
      let data = await promise.json();
      let parsedData = data.articles;
      setState(prevState => ({
        ...prevState,
        articles: parsedData,
        totalResults: data.totalResults,
        loading: false,
      }));
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
        <div className="heading-div">
          <h3 id="heading-top" className="my-4">
            {`${props.heading} ${props.countryName}`}
          </h3>
        </div>
        {state.loading && <Spinner />}
        <div className="row">
          {!state.loading && state.articles.map((element) => {
            return (
              <div className="col-md-3 mx-4 my-4" key={element.url}>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT50mHKSr83o2HKeSJbgZmYaYoxcmxd3epXUQ&s"
                    }
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{element.title.slice(0, 45)}</h5>
                    <p className="card-text">
                      {element.description
                        ? element.description.slice(0, 88)
                        : "Read More..."}
                      ...
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
          disabled={state.page+1 > Math.ceil(state.totalResults / props.pageSize)}
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