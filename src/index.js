import React from 'react';
import ReactDOM from 'react-dom/client'; // v18
// import ReactDOM from 'react-fom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import App from './App';

ReactDOM.createRoot(document.querySelector('#root')).render(<App />) // v18

// ReactDOM.render(<App />, document.querySelector('#root')) // v17