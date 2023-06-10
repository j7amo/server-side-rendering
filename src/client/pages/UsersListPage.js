import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Helmet } from 'react-helmet';

// Because this course is using old React 16.0, we have to work with class components.
class UsersListPage extends Component {
  componentDidMount() {
    // It might look like we can now remove this call because we are getting the initial state
    // for Redux store from the server-side-rendering where we already have users.
    // BUT! Let's imagine the user of our app decides to go to '/' path first, and
    // later he decides to visit '/users'. Because of this order data for 'UsersListPage'
    // WAS NEVER FETCHED ON THE SERVER! So that window.INITIAL_STATE does not have it anymore.
    // That's why we have to keep this call here.
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map((user) => <li key={user.id}>{user.name}</li>);
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.head()}
        List of users
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

function loadData(store) {
  // Why do we use 'store.dispatch'? Why not use 'component.props.fetchUsers'?
  // Because 'connect' function works only with 'Provider' component.
  // For it to work the Provider component MUST BE RENDERED FIRST!
  // But we want to fetch all the data and update Redux store BEFORE RENDERING anything!
  // So we CANNOT USE CONNECT functionality here.
  return store.dispatch(fetchUsers());
}

// We wrap the component AND 'loadData' inside an object for simplifying its usage later on (in the Routes)
export default {
  // As a result UsersListPage component will have 'users' and 'fetchUsers' both available in the props object
  component: connect(mapStateToProps, { fetchUsers })(UsersListPage),
  loadData,
};
