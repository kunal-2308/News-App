import React from 'react'

function Business(props) {
  return (
    <div className="conatiner">
        <div className="heading-div">
          <h3 id="heading-top" className="my-4">
            {props.heading}
          </h3>
        </div>
    </div>
  )
}

export default Business
