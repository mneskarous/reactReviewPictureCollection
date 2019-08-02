import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.js';

import mockCollection from './data/exampleImageData.js';
import mockOptions from './data/exampleOptions.js';

//render your application
ReactDOM.render(<App collection = {mockCollection} options = {mockOptions} />, document.getElementById("app"));