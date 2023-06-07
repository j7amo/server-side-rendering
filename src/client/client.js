// Startup point for the client side application
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

// Here we use a special 'hydrate' method of ReactDOM to work with SSR markup in the browser.
// This process of adding JS interactivity back to the static markup (which is more of a preview before this step)
// and re-rendering it afterward is called HYDRATION.
ReactDOM.hydrate(<Home />, document.getElementById('root'));
