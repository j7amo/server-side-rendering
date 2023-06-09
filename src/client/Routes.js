import React from 'react';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import App from './App';

// The App component will always be rendered and other routes will be nested inside of it.
// Notice how the App part does not have a 'path' and 'exact' properties because
// we do not want to associate it with any but to show 100% of the time.
export default [
  {
    ...App,
    routes: [
      {
        path: '/',
        ...HomePage, // this will result in component: HomePage.component
        exact: true,
      },
      {
        path: '/users',
        ...UsersListPage, // this will result in 1) component: UsersListPage.component 2) loadData: loadData
        exact: true,
      },
    ],
  },
];
