import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
function Sports(props) {
    let [state, setState] = useState({
        articles: [],
        page: 1,
        url: `${props.url}${props.category}&${props.country}${props.api}`,
        totalResults: 0,
        loading: false,
    });

    let handlePrevClick = () => {
        let newPage = state.page - 1;
        if (newPage < 1) {
            return;
        }

        setState(prevState => ({
            ...prevState,
            page: newPage,
        }));
    };

    let handleNextClick = () => {
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
        let fetchData = async () => {
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
                        {`${props.heading} ${props.countryName}`}
                    </h3>
                    {state.loading && <Spinner />}
                    <div className="row d-flex justify-content-around">
                        {!state.loading && state.articles.map((element) => {
                            return (
                                <div className="col-md-3 my-3 mx-3" key={element.url}>
                                    <div className="card" style={{ width: "18rem", marginRight: "10px" }}>
                                        <img src={
                                            element.urlToImage
                                                ? element.urlToImage
                                                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT50mHKSr83o2HKeSJbgZmYaYoxcmxd3epXUQ&s"
                                        } className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{element.title.slice(0, 44)}</h5>
                                            <p className="card-text">
                                                {element.description ? element.description.slice(0, 60) : "Read More..."}
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

export default Sports;
Sports.propTypes = {
    url : PropTypes.string.isRequired,
}