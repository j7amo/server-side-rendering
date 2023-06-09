import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';

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

export default { component: App };
