import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

function Business(props) {
  const [state, setState] = useState({
    articles: [],
    page: 1,
    url: `${props.url}&category=${props.category}&${props.country}${props.api}`,
    totalResults: 0,
    loading: false,
    hasMore: true,
  });

  document.title = `Taza Khabar - ${props.category}`;

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      url: `${props.url}&category=${props.category}&${props.country}${props.api}`,
      page: 1,
      articles: [],
      hasMore: true,
    }));
    fetchData(1); // Fetch data when country or category changes
  }, [props.country, props.category]);

  const fetchData = async (page = 1) => {
    setTimeout(async()=>{
        try {
          props.setProgress(15);
            const finalUrl = `${state.url}&page=${page}&pageSize=${props.pageSize}`;
            console.log("Fetching URL:", finalUrl);
            setState((prevState) => ({ ...prevState, loading: true }));
            props.setProgress(25);
            let promise = await fetch(finalUrl);
            if (!promise.ok) {
              throw new Error(`HTTP error! status: ${promise.status}`);
            }
            props.setProgress(50);
            let parsedData = await promise.json();
            setState((prevState) => ({
              ...prevState,
              articles: page === 1 ? parsedData.articles : prevState.articles.concat(parsedData.articles),
              totalResults: parsedData.totalResults,
              loading: false,
              page: page,
              hasMore: page < Math.ceil(parsedData.totalResults / props.pageSize),
            }));
            props.setProgress(100);
          } catch (error) {
            console.error("Fetching error:", error);
            setState((prevState) => ({
              ...prevState,
              loading: false,
            }));
          }
    },1000)
    
  };

  const fetchMoreData = () => {
    if (state.hasMore) {
      fetchData(state.page + 1);
    }
  };

  return (
    <>
      <div className="container">
        <div className="heading-div" style={{margin:'80px'}}>
          <h3 id="heading-top" className="my-4">
            {`${props.heading} ${props.countryName}`}
          </h3>
          <div>
          <InfiniteScroll
            dataLength={state.articles.length}
            next={fetchMoreData}
            hasMore={state.hasMore}
            loader={<Spinner/>}
          >
            <div className="container">
            <div className="row d-flex justify-content-around">
                
              {state.articles.map((element, index) => (
                <div className="col-md-3 my-3 mx-3" key={`${element.url}-${index}`}>
                  <div className="card position-relative" style={{ width: "18rem", marginRight: "10px" }}>
                    <img
                      src={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT50mHKSr83o2HKeSJbgZmYaYoxcmxd3epXUQ&s"
                      }
                      className="card-img-top"
                      alt="..."
                      style={{ marginBottom: "10px" }}
                    />
                    <span className="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-danger p-2 text-white">
                      {element.author ? `${element.author}` : "Author: None"}
                    </span>
                    <div className="card-body">
                      <h5 className="card-title">{element.title.slice(0, 44)}</h5>
                      <p className="card-text">
                        {element.description ? element.description.slice(0, 60) : "Read More..."}
                      </p>
                      <p className="card-text">{`Time : ${element.publishedAt.slice(0, 10)}`}</p>
                      <Link to="/" className="btn btn-dark">
                        Read More &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </InfiniteScroll>
          </div>
        </div>
      </div>
    </>
  );
}

export default Business;

Business.propTypes = {
  url: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  countryName: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  api: PropTypes.string.isRequired,
  pageSize: PropTypes.string.isRequired,
};
