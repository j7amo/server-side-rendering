import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

// We make a HOC (Higher Order Component that will enhance/decorate any child component we pass in
export default (ChildComponent) => {
  class RequireAuth extends Component {
    render() {
      switch (this.props.auth) {
        case false:
          // On the server side <Redirect /> component works differently. When we use it
          // StaticRouter adds something to the 'context' object. So we need to inspect that object.
          return <Redirect to="/" />;
        case null:
          return <div>Loading...</div>;
        default:
          // If the user is authenticated we just render the ChildComponent
          // WITH all the props that were passed to the HOC!
          return <ChildComponent {...this.props} />;
      }
    }
  }

  function mapStateToProps(state) {
    return {
      auth: state.auth,
    };
  }

  return connect(mapStateToProps)(RequireAuth);
};
