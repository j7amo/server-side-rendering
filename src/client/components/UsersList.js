import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

// Because this course is using old React 16.0, we have to work with class components.
class UsersList extends Component {
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

// As a result UsersList component will have 'users' and 'fetchUsers' both available in the props object
export default connect(mapStateToProps, { fetchUsers })(UsersList);
