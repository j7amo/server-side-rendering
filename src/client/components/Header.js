import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
  // Here we use <a> tags because we want the browser to make a full request with cookies in each of these cases.
  // The <Link /> component is no good for this because it won't trigger browser request.
  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );

  return (
    <div>
      <Link to="/">React SSR</Link>
      <div>
        <Link to="/">Users</Link>
        <Link to="/">Admins</Link>
        {authButton}
      </div>
    </div>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
