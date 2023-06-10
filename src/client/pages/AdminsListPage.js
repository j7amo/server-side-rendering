import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';
import requireAuth from '../hocs/requireAuth';
import { Helmet } from 'react-helmet';

class AdminsListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return this.props.admins.map((admin) => (
      <li key={admin.id}>{admin.name}</li>
    ));
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.admins.length} Admins loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.head()}
        <h3>Protected list of admins</h3>
        <ul>{this.renderAdmins()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    admins: state.admins,
  };
}

function loadData(store) {
  return store.dispatch(fetchAdmins());
}

export default {
  component: connect(mapStateToProps, { fetchAdmins })(
    // Use requireAuth HOC
    requireAuth(AdminsListPage)
  ),
  loadData,
};
