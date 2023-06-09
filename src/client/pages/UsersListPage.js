import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

// Because this course is using old React 16.0, we have to work with class components.
class UsersListPage extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map((user) => <li key={user.id}>{user.name}</li>);
  }

  render() {
    return (
      <div>
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

export function loadData(store) {
  // Why do we use 'store.dispatch'? Why not use 'component.props.fetchUsers'?
  // Because 'connect' function works only with 'Provider' component.
  // For it to work the Provider component MUST BE RENDERED FIRST!
  // But we want to fetch all the data and update Redux store BEFORE RENDERING anything!
  // So we CANNOT USE CONNECT functionality here.
  return store.dispatch(fetchUsers());
}

// As a result UsersListPage component will have 'users' and 'fetchUsers' both available in the props object
export default connect(mapStateToProps, { fetchUsers })(UsersListPage);
