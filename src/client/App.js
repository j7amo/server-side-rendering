import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import { fetchCurrentUser } from './actions';

// Because we have nested routes that we want to render inside an App component
// we need to use a special 'route' prop that has 'routes' property on it.
const App = ({ route }) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App,
  // Add 'loadData' property (just like we did with other components that need data fetching).
  // Why do we add fetching of current user auth status to the App component?
  // Because we want to always check it and the App component is rendered 100% of the time.
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
};
