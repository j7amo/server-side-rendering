import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';

// This component contains all the routes that we'll use in our app
export default () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
    </div>
  );
};
