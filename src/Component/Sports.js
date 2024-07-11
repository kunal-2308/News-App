import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Sports(props) {
  let url = props.url;

  let [state, setState] = useState({
    articles: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        let parsedData = await response.json();
        setState({
          articles: parsedData.articles,
        });
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [url]);

  return (
    <>
      <div className="container mx-4">
        <div className="heading-div">
          <h3 id="heading-top" className="my-4">
            {`${props.heading} ${props.countryName}`}
          </h3>
          <div className="row">
            {state.articles.map((element) => {
              return (
                <div className="col-md-3 mx-2 my-3" key={element.url}>
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
                      <a href={element.url} className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sports;

Sports.propTypes = {
  heading: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
