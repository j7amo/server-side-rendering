import React from 'react';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';

export default [
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
];
