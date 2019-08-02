import React from 'react';

const axios = require('axios');

const ImageFetcher = (props) => {

  const handleClick = (event) => {
    let value = event.target.value
    console.log('clicked', value);
    
  }

  return (
    <div className="container">
      {props.options.map((option, i) => {
        return <button key={i} onClick={handleClick} value={option}>{option}</button>
      })}
    </div>
  )
}

export default ImageFetcher;