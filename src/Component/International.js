import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Spinner from "./Spinner";
import PropTypes from 'prop-types';

function International(props) {
    const [state, setState] = useState({
        articles: [],
        page: 1,
        url: `${props.url}&category=${props.category}&${props.country}${props.api}`,
        totalResults: 0,
        loading: false,
    });

    useEffect(() => {
        setState(prevState => ({
            ...prevState,
            url: `${props.url}&category=${props.category}&${props.country}${props.api}`,
        }))
    }, [props.country]);

    const handlePrevClick = () => {
        let newPage = state.page - 1;
        if (newPage < 1) {
            return;
        }

        setState(prevState => ({
            ...prevState,
            page: newPage,
        }));
    };

    const handleNextClick = () => {
        let newPage = state.page + 1;
        if (newPage > Math.ceil(state.totalResults / props.pageSize)) {
            return;
        }

        setState(prevState => ({
            ...prevState,
            page: newPage,
        }));
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                let finalUrl = `${state.url}&page=${state.page}&pageSize=${props.pageSize}`;
                setState(prevState => ({ ...prevState, loading: true }));
                console.log("Fetching URL:", finalUrl);
                let promise = await fetch(finalUrl);
                if (!promise.ok) {
                    throw new Error(`HTTP error! status: ${promise.status}`);
                }
                let parsedData = await promise.json();
                setState(prevState => ({
                    ...prevState,
                    articles: parsedData.articles,
                    totalResults: parsedData.totalResults,
                    loading: false,
                }));
            } catch (error) {
                console.error("Fetching error:", error);
                setState(prevState => ({ ...prevState, articles: [], loading: false }));
            }
        };
        fetchData();
    }, [state.url, state.page, props.pageSize]);

    return (
        <>
            <div className="container">
                <div className="heading-div">
                    <h3 id="heading-top" className="my-4">
                        {`${props.heading}`}
                    </h3>
                    {state.loading && <Spinner />}
                    <div className="row d-flex justify-content-around">
                        {!state.loading && state.articles.map((element) => {
                            return (
                                <div className="col-md-3 my-3 mx-3" key={element.url}>
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
                                            {element.author ? `${element.author}` : 'Author: None'}
                                        </span>
                                        <div className="card-body">
                                            <h5 className="card-title">{element.title.slice(0, 44)}</h5>
                                            <p className="card-text">
                                                {element.description ? element.description.slice(0, 60) : "Read More..."}
                                            </p>
                                            <p className="card-text">
                      {`Time : ${element.publishedAt.slice(0, 10)}`}
                    </p>
                                            <Link to="/" className="btn btn-dark">
                                                Read More &rarr;
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="container d-flex justify-content-around">
                        <button className="btn btn-dark" type="button" disabled={state.page <= 1} onClick={handlePrevClick}>&larr; Previous</button>
                        <button className="btn btn-dark" type="button" onClick={handleNextClick}>Next &rarr;</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default International;

International.propTypes = {
    url: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    api: PropTypes.string.isRequired,
    pageSize: PropTypes.string.isRequired,
};
